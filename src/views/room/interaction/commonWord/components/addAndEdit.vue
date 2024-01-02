<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
        <el-form-item label="文案内容" prop="content">
          <el-input
            v-model="form.content"
            type="textarea"
            maxlength="50"
            show-word-limit
            placeholder="请输入常用文案内容"
          />
        </el-form-item>
        <el-form-item label="分类" prop="type">
          <el-select v-model="form.type" placeholder="请选择分类" class="w-full">
            <el-option v-for="item in TYPE" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="form.sort" :min="1" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio label="0">隐藏</el-radio>
            <el-radio label="1">显示</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { editApi, addApi } from '@/api/room/commonWord.js'
import { useToggle } from '@vueuse/core'
import { AddAndEditformData, formRule, TYPE } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(AddAndEditformData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑常用语' : '新增常用语'
  Object.assign(form, params || AddAndEditformData())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
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
