<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="协议标题" prop="title">
        <el-input v-model="form.title" placeholder="请输入协议标题" />
      </el-form-item>
      <el-form-item label="协议分类" prop="configId">
        <el-select v-model="form.configId" placeholder="请选择协议分类" class="w-full">
          <el-option v-for="item in categoryList" :key="item.id" :label="item.dealType" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="协议内容" prop="content">
        <!-- <el-input v-model="form.content" type="textarea" placeholder="请输入协议内容" /> -->
        <MyEditor :content="form.content" @queryContent="queryContent" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/app/deal.js'
import { getTypeListApi } from '@/api/app/dealType.js'
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
  titleName.value = params !== undefined ? '编辑协议说明' : '新增协议说明'
  Object.assign(form, params || formData())
  visible.value = true
}

// 协议分类列表
const categoryList = ref([])
const getAgreementList = async () => {
  const { data } = await getTypeListApi()
  categoryList.value = data
}
getAgreementList()

const queryContent = (params) => {
  // form.content = JSON.stringify(params)
  console.log('params', params)
  form.content = params
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
