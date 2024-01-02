<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- input -->
      <el-form-item label="标签名称" prop="labelName">
        <el-input v-model="form.labelName" maxlength="12" placeholder="请输入标签名称" />
        <p>最多可输入12个字符</p>
      </el-form-item>
      <!-- inputNumber -->
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="form.sort" controls-position="right" :min="1" placeholder="请输入排序" />
      </el-form-item>

      <!-- radio -->
      <el-form-item label="类型" prop="type">
        <el-radio-group v-model="form.type" placeholder="请选择">
          <el-radio :label="1">关于我</el-radio>
          <el-radio :label="2">我想找</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="状态" prop="hidden">
        <el-radio-group v-model="form.hidden" placeholder="请选择">
          <el-radio :label="1">隐藏</el-radio>
          <el-radio :label="0">显示</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { editApi, addApi } from '@/api/user/label.js'
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
  titleName.value = isEdit ? '编辑' : '新增'
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
        visible.value = false
        await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        visible.value = false
        delete form.id
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

defineExpose({ showDialog })
</script>
