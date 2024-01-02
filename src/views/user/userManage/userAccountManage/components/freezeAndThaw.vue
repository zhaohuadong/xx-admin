<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="freezeAndThawFormRule">
        <el-form-item label="已冻结:">
          {{ coinFrozen ? '账户余额' : '' }} {{ charmNumFrozen ? '账户收益' : '' }}
        </el-form-item>
        <el-form-item v-if="popupStatus" label="冻结类型" prop="newTypes">
          <el-checkbox-group v-model="form.newTypes">
            <el-checkbox :label="1" :disabled="!!coinFrozen">账户余额</el-checkbox>
            <el-checkbox :label="3" :disabled="!!charmNumFrozen">账户收益</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item v-else label="解冻类型" prop="newTypes">
          <el-checkbox-group v-model="form.newTypes">
            <el-checkbox :label="2" :disabled="!coinFrozen">账户余额</el-checkbox>
            <el-checkbox :label="4" :disabled="!charmNumFrozen">账户收益</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item v-if="popupStatus" label="冻结原因" prop="reason">
          <el-input v-model="form.reason" type="textarea" placeholder="请输入冻结原因" />
        </el-form-item>
        <el-form-item v-else label="解冻原因" prop="unreason">
          <el-input v-model="form.unreason" type="textarea" placeholder="请输入解冻原因" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { objectMerge } from '@/utils/index.js'
import { fundFrozenApi, fundUnfrozenApi } from '@/api/user/manager.js'
import { useToggle } from '@vueuse/core'
import { freezeAndThawTableForm, freezeAndThawFormRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const isEdit = ref(true)
const form = reactive(freezeAndThawTableForm())
const popupStatus = ref()
const titleName = ref('冻结账户')
const coinFrozen = ref()
const charmNumFrozen = ref()
// 弹窗打开
const showDialog = (params, status) => {
  proxy.resetForm(formRef.value)
  coinFrozen.value = params.coinFrozen
  charmNumFrozen.value = params.charmNumFrozen
  // console.log(coinFrozen.value, charmNumFrozen.value)
  popupStatus.value = status
  isEdit.value = status
  titleName.value = status ? '冻结账户' : '解冻账户'
  objectMerge(form, params || freezeAndThawTableForm())
  form.userId = params.userId
  // Object.assign(form, params || freezeAndThawTableForm())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    // console.log(form)
    form.types = form.newTypes.join(';')
    if (valid) {
      if (isEdit.value) {
        visible.value = false
        await fundFrozenApi(form)
        proxy.$modal.msgSuccess(`冻结成功`)
        emits('queryTable')
      } else {
        visible.value = false
        form.reason = form.unreason
        await fundUnfrozenApi(form)
        proxy.$modal.msgSuccess(`解冻成功`)
        emits('queryTable')
      }
    } else {
      console.log('error submit')
      return false
    }
  })
}

defineExpose({ showDialog })
</script>
