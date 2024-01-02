<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
        <el-form-item label="类别名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入类别名称" />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="form.sort" :min="0" placeholder="请输入排序" />
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-radio-group v-model="form.state" class="ml-4">
            <el-radio :label="1">显示</el-radio>
            <el-radio :label="0">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { addApi, editApi } from '@/api/room/type.js'
import { addAndEditformData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(addAndEditformData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗设置
const showDialog = (params, tabVal) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  if (tabVal === '2') {
    titleName.value = params !== undefined ? '编辑个人类别' : '新增个人类别'
  } else {
    titleName.value = params !== undefined ? '编辑官方类别' : '新增官方类别'
  }
  Object.assign(form, params || addAndEditformData())
  form.date = [form.validDate, form.expireDate]
  form.type = tabVal
  visible.value = true
}

// 提交form表单
const submit = () => {
  console.log(form)
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
