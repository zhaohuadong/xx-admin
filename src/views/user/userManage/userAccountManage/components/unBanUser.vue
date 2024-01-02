<template>
  <div>
    <MyDialog :model-value="visible" title="解封用户" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="unbanUserFormRule">
        <el-form-item label="解封理由" prop="frozenDes">
          <el-input
            v-model="form.frozenDes"
            type="textarea"
            maxlength="500"
            :show-word-limit="true"
            placeholder="请输入解封理由，最多可输入500字"
          />
        </el-form-item>

        <el-form-item label="封禁证据" prop="urls">
          <FileUpload :modelValue="form.urls" @queryFile="queryFile" />
        </el-form-item>

        <el-form-item label="解封来源">
          <el-input v-model="form.frozenSource" placeholder="请输入解封来源" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { unsealUserApi } from '@/api/user/manager.js'
import { useToggle } from '@vueuse/core'
import { unbanUserTableForm, unbanUserFormRule } from '../constants'
const emits = defineEmits(['queryBanType'])

const propsData = defineProps({
  userId: {
    type: String,
    required: true,
  },
})
const { proxy } = getCurrentInstance()

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(unbanUserTableForm())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || unbanUserTableForm())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    form.userId = +propsData.userId
    if (valid) {
      visible.value = false
      await unsealUserApi(form)
      proxy.$modal.msgSuccess(`解封成功`)
      emits('queryBanType', 0)
    } else {
      console.log('error submit')
      return false
    }
  })
}

const queryFile = (params) => {
  form.urls.push(params)
  console.log(params)
}
defineExpose({ showDialog })
</script>
