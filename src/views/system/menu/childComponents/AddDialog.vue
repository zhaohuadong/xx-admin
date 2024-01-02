<template>
  <MyDialog :model-value="visible" :title="titleName" :width="600" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" label-width="auto">
      <el-form-item label="上级菜单" prop="parentId">
        <el-cascader
          v-model="form.parentArrary"
          style="width: 100%"
          :options="options"
          :props="cascaderProps"
          clearable
          filterable
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="菜单类型" prop="menuType">
        <el-radio-group v-model="form.menuType">
          <el-radio label="M">目录</el-radio>
          <el-radio label="C">菜单</el-radio>
          <el-radio label="F">按钮</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.menuType === 'M'">
        <el-form-item label="目录名称" prop="menuName" :rules="[{ required: true, message: '请输入目录名称' }]">
          <el-input v-model="form.menuName" placeholder="请输入目录名称" />
        </el-form-item>
        <el-form-item label="目录路由" prop="path" :rules="[{ required: true, message: '请输入目录路由' }]">
          <el-input v-model="form.path" placeholder="请输入目录路由" />
        </el-form-item>
      </div>
      <div v-else-if="form.menuType === 'C'">
        <el-form-item label="菜单名称" prop="menuName" :rules="[{ required: true, message: '请输入菜单名称' }]">
          <el-input v-model="form.menuName" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item label="菜单路由" prop="path" :rules="[{ required: true, message: '请输入菜单路由' }]">
          <el-input v-model="form.path" placeholder="请输入菜单路由" />
        </el-form-item>
        <el-form-item label="权限名称" prop="perms" :rules="[{ required: true, message: '请输入权限名称' }]">
          <el-input v-model="form.perms" placeholder="请输入权限名称" />
        </el-form-item>
        <el-form-item label="是否缓存" prop="isCache" :rules="[{ required: true, message: '请选择是否缓存' }]">
          <el-radio-group v-model="form.isCache">
            <el-radio label="0">是</el-radio>
            <el-radio label="1">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item label="按钮名称" prop="menuName" :rules="[{ required: true, message: '请输入菜单名称' }]">
          <el-input v-model="form.menuName" placeholder="请输入按钮名称" />
        </el-form-item>
        <el-form-item label="权限名称" prop="perms" :rules="[{ required: true, message: '请输入权限名称' }]">
          <el-input v-model="form.perms" placeholder="请输入权限名称" />
        </el-form-item>
      </div>
      <el-form-item
        label="排序"
        prop="orderNum"
        :rules="[
          { required: true, message: '请输入排序' },
          { type: 'number', message: '排序必须是数值' },
        ]"
      >
        <el-input v-model.number="form.orderNum" placeholder="请输入排序" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { getMenuTreeSelect, addApi, editApi } from '@/api/systemManage/menu'
import { useToggle } from '@vueuse/core'
import { formData } from '../constant'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 获取菜单下拉列表
let options = []
const handleMenuCascader = async () => {
  const { data } = await getMenuTreeSelect()
  options = data
}
handleMenuCascader()
const cascaderProps = { value: 'id', checkStrictly: true }

// 选择菜单权限
const handleChange = (params) => {
  form.parentId = params.slice(-1).join('')
}

// 判断是新增或编辑
let isEdit = false
const titleName = ref('')
// 弹窗打开
const showDialog = (type, params = null) => {
  proxy.resetForm(formRef.value)
  if (params) form.parentArrary = [params.parentId]
  isEdit = type === 'edit'
  titleName.value = type === 'edit' ? '编辑' : '新增'
  if (isEdit) Object.assign(form, params || formData())
  if (!isEdit && params) form.parentId = params.parentId
  if (type === 'add') {
    Object.assign(form, formData())
  }
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
        console.log(form)
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
