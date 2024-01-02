<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="分类" prop="configId">
        <el-select v-model="form.configId" placeholder="请选择分类" class="w-full">
          <el-option v-for="item in categoryList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="form.sort" placeholder="请输入排序" />
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="form.content" type="textarea" placeholder="请输入内容" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/app/helpCenter.js'
import { getConfigListApi } from '@/api/app/config.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑帮助中心' : '新增帮助中心'
  Object.assign(form, params || formData())
  visible.value = true
}

// 协议分类列表
const categoryList = ref([])
const getHelpCenterCategoryList = async () => {
  const { data } = await getConfigListApi()
  categoryList.value = data
}
getHelpCenterCategoryList()

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
