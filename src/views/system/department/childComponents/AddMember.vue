<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="所属部门" prop="deptId">
        <el-cascader
          v-model="form.deptId"
          style="width: 100%"
          :options="treeDataOptions"
          :props="cascaderProps"
          clearable
          filterable
        />
      </el-form-item>
      <el-row>
        <el-col :span="11">
          <el-form-item label="员工昵称" prop="nickName">
            <el-input v-model="form.nickName" placeholder="请输入员工昵称" />
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="员工用户名" prop="userName">
            <el-input v-model="form.userName" placeholder="请输入员工用户名" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" />
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="2">
          <el-form-item label="手机号码" prop="phonenumber">
            <el-input v-model="form.phonenumber" placeholder="请输入手机号码" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="员工角色" prop="roleId">
        <el-select v-model="form.roleId" placeholder="请选择员工角色" class="w-full">
          <el-option v-for="item in roleOptions" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio label="0">在职</el-radio>
          <el-radio label="1">离职</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { editApi, addApi } from '@/api/systemManage/sysuser.js'
import { getListApi } from '@/api/systemManage/role.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from './memberConstant'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
const treeDataOptions = ref()
const cascaderProps = { value: 'deptId', label: 'deptName', emitPath: false }
const roleOptions = ref()
const handleGetRoleList = async () => {
  const { rows } = await getListApi()
  roleOptions.value = rows
}
handleGetRoleList()

// 判断是新增或编辑
let isEdit = false
const titleName = ref('')
// 弹窗打开
const showDialog = (treeData, params = null) => {
  treeDataOptions.value = treeData
  proxy.resetForm(formRef.value)
  isEdit = !!params
  titleName.value = isEdit ? '编辑' : '新增'
  Object.assign(form, params || formData())
  visible.value = true
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
