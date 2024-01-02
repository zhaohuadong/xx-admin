<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="addAndEditFormRule" label-width="auto">
      <el-form-item label="周期" prop="date">
        <el-date-picker
          v-model="form.date"
          type="datetimerange"
          value-format="YYYY-MM-DD"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="setCheckDate"
        />
      </el-form-item>
      <el-form-item label="期数" prop="periods">
        <el-input v-model="form.periods" placeholder="请输入期数" />
      </el-form-item>
      <el-form-item label="礼物A" prop="giftA">
        <el-select v-model="form.giftA" placeholder="请选择礼物A" class="w-full">
          <el-option v-for="item in MESSAGETYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="礼物B" prop="giftB">
        <el-select v-model="form.giftB" placeholder="请选择礼物B" class="w-full">
          <el-option v-for="item in MESSAGETYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="房间类型" prop="type">
        <el-select v-model="form.type" placeholder="请选择房间类型" class="w-full">
          <el-option v-for="item in MESSAGETYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/system/message.js'
import { useToggle } from '@vueuse/core'
import { addAndEditFormData, addAndEditFormRule, MESSAGETYPE } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(addAndEditFormData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params, tabVal) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '新建周星礼物' : '编辑周星礼物'
  Object.assign(form, params || addAndEditFormData())
  form.date = [form.validDate, form.expireDate]
  form.type = tabVal === '' ? 0 : tabVal
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      console.log(form)
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

// 获取选中日期
const setCheckDate = (param) => {
  form.validDate = param[0]
  form.expireDate = param[1]
}
defineExpose({ showDialog })
</script>
