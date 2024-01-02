<template>
  <MyDialog :model-value="visible" :title="titleName" :width="600" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" label-width="auto" :model="form" :rules="formRule">
      <el-form-item label="上级部门" prop="parentId">
        <el-cascader
          v-model="form.parentArray"
          style="width: 100%"
          :options="deptOptions"
          :props="cascaderProps"
          clearable
          filterable
          placeholder="请选择上级部门"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="部门名称" prop="deptName">
        <el-input v-model="form.deptName" placeholder="请输入部门名称" />
      </el-form-item>
      <el-form-item label="排序" prop="orderNum">
        <el-input v-model.number="form.orderNum" type="number" placeholder="请输入排序" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { addApi, editApi } from '@/api/systemManage/department'

import { useToggle } from '@vueuse/core'
import { formData, formRule } from './departmentConstent'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

const cascaderProps = { value: 'deptId', label: 'deptName', checkStrictly: true }

// 判断是新增或编辑
let isEdit = false
const titleName = ref('')
// 部门下拉框
let deptOptions = []
// 弹窗打开
const showDialog = (options, params = null) => {
  deptOptions = options
  proxy.resetForm(formRef.value)
  if (params) {
    const ancestorsList = params.ancestors.split(',').map(Number)
    ancestorsList.splice(0, 1)
    form.parentArray = ancestorsList
  }

  isEdit = !!params
  titleName.value = isEdit ? '编辑' : '新增'
  Object.assign(form, params || formData())
  visible.value = true
}

// 选中值
const handleChange = (params) => {
  console.log(params)
  form.parentId = Number(params.slice(-1).join(','))
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit) {
        await editApi(form)
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

defineExpose({ showDialog })
</script>

<style lang="scss" scoped></style>
