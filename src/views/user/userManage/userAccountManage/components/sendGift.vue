<template>
  <div>
    <MyDialog :model-value="visible" title="赠送礼物" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="sendGiftFormRule" label-width="auto">
        <el-form-item label="礼物" prop="giftId">
          <el-select v-model="form.giftId" placeholder="请选择礼物" class="w-full">
            <el-option
              v-for="(item, index) in giftListLabel"
              :key="index"
              :label="item.giftName"
              :value="item.giftId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="数量" prop="number">
          <el-input-number v-model="form.number" :min="0" placeholder="请输入数量" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { objectMerge } from '@/utils/index.js'
import { useToggle } from '@vueuse/core'
import { sendGifTableForm, sendGiftFormRule } from '../constants'
import { getGiftListApi, sendGiftApi } from '@/api/user/manager.js'
const emits = defineEmits(['queryTable'])

const { proxy } = getCurrentInstance()

const [visible, toggle] = useToggle()
const formRef = ref()
const giftListLabel = ref()
const form = reactive(sendGifTableForm())
// 弹窗打开
const showDialog = async (params) => {
  proxy.resetForm(formRef.value)
  objectMerge(form, params || sendGifTableForm())
  form.userId = params.userId
  // Object.assign(form, params || sendGifTableForm())
  visible.value = true
  const { data } = await getGiftListApi()
  giftListLabel.value = data
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    // console.log(form)
    if (valid) {
      await sendGiftApi(form)
      proxy.$modal.msgSuccess(`赠送成功`)
      emits('queryTable')
      // if (isEdit.value) {
      //   await editMessageApi(form)
      //   proxy.$modal.msgSuccess(`编辑成功`)
      // } else {
      //   await addMessageApi(form)
      //   proxy.$modal.msgSuccess(`新增成功`)
      // }
      // emits('queryTable', { pageNum: 1 })
      // visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
