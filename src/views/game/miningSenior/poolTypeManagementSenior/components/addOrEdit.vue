<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="奖池名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入奖池名称" clearable class="w-full" />
      </el-form-item>
      <el-form-item v-if="poolActives === '1'" label="奖池类别" prop="type">
        <el-select v-model="form.type" placeholder="请选择奖池类别" class="w-full">
          <el-option v-for="item in options.value" :key="item.type" :label="item.title" :value="item.type" />
        </el-select>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="form.sort" controls-position="right" :min="1" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { getListApi, addApi, editApi, editPersonApi, addPersonApi } from '@/api/game/superior.js'

import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
import { getCurrentInstance, reactive, ref } from 'vue'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
const options = reactive([])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const poolActives = ref('1')
const showDialog = async (params, poolActive) => {
  if (poolActive === '1') {
    const { data } = await getListApi()
    options.value = data
  }
  poolActives.value = poolActive
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'
  Object.assign(form, params || formData())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        if (poolActives.value === '1') {
          await editApi(form)
        } else {
          await editPersonApi(form)
        }
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        if (poolActives.value === '1') {
          await addApi(form)
        } else {
          await addPersonApi(form)
        }
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
