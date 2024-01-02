<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="分类" prop="prizeType">
        <el-select v-model="form.prizeType" placeholder="请选择分类" class="w-full" @change="handleChange">
          <el-option v-for="item in options.value" :key="item.type" :label="item.title" :value="item.type" />
        </el-select>
      </el-form-item>
      <el-form-item label="选择装扮" prop="prizeId">
        <el-select v-model="form.prizeId" placeholder="请选择装扮" class="w-full">
          <el-option v-for="item in optionsPrize.value" :key="item.id" :label="item.title" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="数量" prop="prizeNumber">
        <el-input v-model.number="form.prizeNumber" placeholder="请输入数量"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="stockNumber">
        <el-input-number v-model="form.stockNumber" size="large" :min="1" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { editApi, addApi, getCategoryListApi, getPrizeListApi } from '@/api/activity/prize.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
import { watch } from 'vue'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = async (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'
  if (params) {
    const { data } = await getPrizeListApi({ type: params.prizeType })
    optionsPrize.value = data
  }
  Object.assign(form, params || formData())
  visible.value = true
}
const options = reactive({})
// 获取奖励类型
;(async function () {
  const { data } = await getCategoryListApi()
  options.value = data
})()

// 选择礼物分类
const checkType = ref()
const optionsPrize = reactive({})
const handleChange = async (params) => {
  const { data } = await getPrizeListApi({ type: params })
  checkType.value = params

  optionsPrize.value = data
}
watch(
  () => checkType.value,
  (newVal) => {
    form.prizeId = ''
  }
)
// 编辑获取奖励类型

const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    form.jackpotType = 1
    if (valid) {
      if (isEdit.value) {
        await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
      }
      emits('queryTable', { pageNum: 1 })
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
