<template>
  <div>
    <MyDialog :model-value="visible" title="赠送" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="giveFormRule" label-width="auto">
        <el-form-item label="勋章名称">
          <el-input v-model="form.medalName" disabled />
        </el-form-item>
        <el-form-item label="图片">
          <el-image
            class="w-20 h-20 m-1"
            :src="form.iconUrl"
            :preview-src-list="[form.iconUrl]"
            fit="fill"
            :preview-teleported="true"
          ></el-image>
        </el-form-item>
        <el-form-item label="用户编号" prop="userCode">
          <el-input v-model="form.userCode" placeholder="请输入用户编号" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { sendApi } from '@/api/stageProperty/medalList.js'
import { useToggle } from '@vueuse/core'
import { giveFormData, giveFormRule } from '../constants'
const { proxy } = getCurrentInstance()

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(giveFormData())

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.keys(form).map((item) => (form[item] = params[item]))
  console.log(form)
  visible.value = true
}

// 保存
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await sendApi(form)
      console.log(form)
      proxy.$modal.msgSuccess(`赠送成功`)
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
