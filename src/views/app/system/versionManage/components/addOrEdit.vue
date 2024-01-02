<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="发版类型" prop="appType">
        <el-radio-group v-model="form.appType">
          <el-radio label="1">Android</el-radio>
          <el-radio label="2">Ios</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="选择应用" prop="appCode">
        <el-radio-group v-model="form.appCode">
          <el-radio :label="1">闲闲</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="版本号" prop="version">
        <el-input v-model="form.version" placeholder="请输入版本号" />
      </el-form-item>
      <el-form-item label="更新文案" prop="updateContent">
        <el-input v-model="form.updateContent" type="textarea" placeholder="请输入更新文案" />
      </el-form-item>
      <!--ios只填写安装地址 ，安卓需要切换选择上传文件或填写地址-->
      <el-form-item v-if="form.appType === '1'" label="安装包" prop="installType">
        <el-radio-group v-model="form.installType">
          <el-radio label="1">上传安装包</el-radio>
          <el-radio label="2">填写下载地址</el-radio>
          <el-radio label="3">IOS安装地</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="form.appType === '1' && form.installType === '1'">
        <FileUpload :modelValue="form.installUrl" :limit="2" @queryFile="queryFile" />
      </el-form-item>
      <el-form-item
        v-if="form.appType === '2' || form.installType === '2' || form.installType === '3'"
        label="安装地址"
        prop="installUrl"
      >
        <el-input v-model="form.installUrl" type="textarea" placeholder="请输入更新文案" />
      </el-form-item>
      <el-form-item label="更新方式" prop="updateType">
        <el-radio-group v-model="form.updateType">
          <el-radio label="1">强制更新</el-radio>
          <el-radio label="2">自主更新</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="弹窗方式" prop="popType">
        <el-radio-group v-model="form.popType">
          <el-radio label="1">每次启动应用弹出</el-radio>
          <el-radio label="2">每天仅第一次启动弹出一次</el-radio>
          <el-radio label="3">每周仅第一次启动弹出一次</el-radio>
          <el-radio label="4">本次更新仅第一次启动弹出一次</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="版本状态" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio label="1">启用</el-radio>
          <el-radio label="2">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
import { addApi, editApi } from '@/api/app/manage.js'
const [visible, toggle] = useToggle()
const formRef = ref()
const { proxy } = getCurrentInstance()
const form = reactive(formData())
const emits = defineEmits(['queryTable'])

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗设置
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑版本' : '新增版本'
  if (isEdit.value) {
    // radio 数据格式转为 string
    params.appType = params.appType + ''
    params.installType = params.installType + ''
    params.updateType = params.updateType + ''
    params.popType = params.popType + ''
  }
  Object.assign(form, params || formData())
  visible.value = true
}
// 提交form表单
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
// 获取上传图片地址
const queryFile = (params) => {
  form.installUrl = params
}

defineExpose({ showDialog })
</script>
<style lang="scss" scoped></style>
