<template>
  <MyDialog :model-value="visible" title="封禁用户" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="封禁原因" prop="banningCause">
        <el-cascader v-model="form.banningCause" class="w-full" :options="options" />
      </el-form-item>
      <el-form-item label="封禁时长" prop="banningDuration">
        <el-radio-group v-model="form.banningDuration">
          <el-radio :label="0">按小时封禁</el-radio>
          <el-radio :label="1">按天封禁</el-radio>
          <el-radio :label="2">按月封禁</el-radio>
          <el-radio :label="3">永久</el-radio>
        </el-radio-group>
        <el-input
          v-show="getTips(form.banningDuration)"
          v-model="form.banningDurations"
          class="w-60"
          placeholder="请输入封禁时长"
        >
          <template #append>{{ getTips(form.banningDuration) }}</template>
        </el-input>
      </el-form-item>
      <el-form-item label="封禁来源" prop="banningSource">
        <el-input v-model="form.banningSource" placeholder="请输入封禁来源方" />
      </el-form-item>
      <el-form-item label="封禁理由" prop="banningReason">
        <el-input
          v-model="form.banningReason"
          placeholder="请输入封禁理由"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="封禁证据" prop="banningEvidence">
        <FileUpload :modelValue="form.fileUrl" />
      </el-form-item>
      <el-form-item label="封禁实名认证关联账号" prop="banningAssociationAccount">
        <el-radio-group v-model="form.banningAssociationAccount">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { sealUserData, sealUserRule } from '../drivingNumList/constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 运营类型
  type: {
    type: Number,
    default: 1,
  },
})
const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(sealUserData())
const formRule = reactive(sealUserRule)
const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'consistency',
        label: 'Consistency',
      },
      {
        value: 'feedback',
        label: 'Feedback',
      },
      {
        value: 'efficiency',
        label: 'Efficiency',
      },
      {
        value: 'controllability',
        label: 'Controllability',
      },
    ],
  },
]
const getTips = (val) => {
  switch (Number(val)) {
    case 0:
      return '小时'
    case 1:
      return '小时/天'
    case 2:
      return '小时/天/月'
    default:
      return ''
  }
}
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || sealUserData())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await addApi(form)
      proxy.$modal.msgSuccess(`新增成功`)
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
