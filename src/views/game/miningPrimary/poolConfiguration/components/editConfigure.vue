<template>
  <MyDialog :model-value="visible" title="修改配置" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRuleRatio" label-width="auto">
      <el-form-item label="库存产出投入比最大上限" prop="maxRatio">
        <el-input v-model="form.maxRatio" type="number" placeholder="请输入产投比" />
      </el-form-item>
      <el-form-item label="库存产出投入比最小上限" prop="minRatio">
        <el-input v-model.number="form.minRatio" type="number" placeholder="请输入产投比" />
      </el-form-item>
      <el-form-item label="个人产出投入比最大上限" prop="maxSelfRatio">
        <el-input v-model.number="form.maxSelfRatio" type="number" placeholder="请输入产投比" />
      </el-form-item>
      <el-form-item label="个人产出投入比最大上限" prop="minSelfRatio">
        <el-input v-model.number="form.minSelfRatio" type="number" placeholder="请输入产投比" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { setRatioApi } from '@/api/game/poolConfiguration.js'
import { useToggle } from '@vueuse/core'
import { formDataRatio, formRuleRatio } from '../constants'
import { getCurrentInstance, reactive, ref } from 'vue'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formDataRatio())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || formDataRatio())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await setRatioApi(form)
      proxy.$modal.msgSuccess(`修改成功`)
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
