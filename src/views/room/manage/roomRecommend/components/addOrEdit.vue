<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="newToggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- input -->
      <el-form-item label="房间编号" prop="crId">
        <el-input v-model="form.crId" placeholder="请输入房间编号" @input="handleInput" />
      </el-form-item>
      <div v-show="showType" class="content">
        <el-form-item label="房间名称">
          <el-input v-model="form.roomName" disabled placeholder="请输入房间名称" />
        </el-form-item>
        <el-form-item label="官方类别">
          <!-- <el-select v-model="form.roomCategoryType" disabled>
            <el-option :value="1" label="红颜"></el-option>
            <el-option :value="2" label="蓝颜"></el-option>
          </el-select> -->
          <el-input v-model="form.roomCategory" disabled />
        </el-form-item>
      </div>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { getListApi } from '@/api/room/room.js'
import { addApi } from '@/api/room/recommend.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 判断是新增或编辑
let isEdit = false
const titleName = ref('')

// 显示弹窗
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  isEdit = !!params
  titleName.value = isEdit ? '编辑' : '新增房间'
  // 初始化表单值
  Object.assign(form, params || formData())
  visible.value = true
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit) {
        // await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
      }
      emits('queryTable')
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}

// 防抖
const debounce = (fn, delay) => {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
}
// 监听房间编号
const showType = ref(false)
const handleInput = debounce(async (params) => {
  const reg = /^[0-9]+$/
  if (!reg.test(params.trim())) {
    form.roomName = ''
    form.type = ''
    return
  }
  const { rows } = await getListApi({ roomId: params })
  if (rows.length) showType.value = true
  form.roomName = rows.length ? rows[0].roomTitle : ''
  form.roomCategory = rows.length ? rows[0].roomCategory : ''
}, 500)

// 优化关闭弹窗事件
const newToggle = (params) => {
  showType.value = false
  return toggle(params)
}
defineExpose({ showDialog })
</script>
