<template>
  <div>
    <MyDialog :model-value="visibel" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="giveRule" label-width="auto" mx-auto>
        <el-form-item label="商品名称:">
          <div>{{ form.commodityName }}</div>
        </el-form-item>
        <el-form-item label="图片:">
          <el-image style="width: 100px; height: 100px" :src="form.previewUrl" />
        </el-form-item>
        <el-form-item label="效果图:">
          <el-image style="width: 100px; height: 100px" :src="form.dynamicUrl" />
        </el-form-item>
        <el-form-item label="用户编号:" prop="userCode">
          <el-input v-model="form.userCode" placeholder="请输入用户编号，多个用“;”隔开"></el-input>
        </el-form-item>
        <el-form-item label="使用天数:" prop="days">
          <el-input-number v-model="form.days" :disabled="!!form.isForever"></el-input-number>
          <el-checkbox
            v-model="form.isForever"
            label="永久"
            :true-label="1"
            :false-label="0"
            size="large"
            :checked="false"
            @change="handleChange"
          />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>

<script setup>
import { sendApi } from '@/api/expense/product.js'

import { useToggle } from '@vueuse/core'
import { giveData, giveRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visibel, toggle] = useToggle()
const formRef = ref()
const form = reactive(giveData())

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = '赠送'
  Object.assign(form, params || giveData())
  form.commodityId = params.id
  visibel.value = true
}

// 选择为永久时
const handleChange = (params) => {
  if (params === 1) form.days = 9999
  if (params === 0) form.days = null
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        await sendApi(form)
        proxy.$modal.msgSuccess(`赠送成功`)
        formRef.value.resetFields()
        form.isForever = 0
      }
      emits('queryTable', { pageNum: 1 })
      visibel.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
<style lang="scss">
.el-form-item {
  margin-bottom: 15px;
  .el-input-number {
    width: 100%;
  }
}
</style>
