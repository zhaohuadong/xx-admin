<template>
  <div>
    <MyDialog :model-value="visibel" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto" mx-auto>
        <el-form-item v-if="titleName === '新增靓号'" label="靓号:" prop="number">
          <el-input v-model.number="form.number" type="number" :min="0" placeholder="请填写非重复的靓号"></el-input>
        </el-form-item>
        <el-form-item v-if="titleName === '编辑靓号' && form.state === 2" label="原始编号:">
          <el-input v-model.number="form.userCode" :min="0" :disabled="form.state === 2" type="number"></el-input>
        </el-form-item>
        <el-form-item v-if="titleName === '编辑靓号' && form.state === 2" label="拥有靓号:" prop="number">
          <el-input v-model.number="form.number" :min="0" :disabled="form.state === 2" type="number"></el-input>
        </el-form-item>
        <el-form-item v-if="titleName === '编辑靓号' && form.state === 1" label="当前靓号:" prop="number">
          <el-input v-model.number="form.number" disabled type="number"></el-input>
        </el-form-item>
        <el-form-item v-if="titleName === '编辑靓号' && form.state === 1" label="发放用户编号:" prop="userCode">
          <el-input v-model.number="form.userCode" type="number"></el-input>
        </el-form-item>
        <el-form-item label="类别:" prop="categoryId">
          <el-select v-model="form.categoryId" :disabled="form.state === 2">
            <el-option v-for="item in options.value" :key="item.id" :label="item.categoryName" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="过期时间:">
          <el-date-picker
            v-model="form.selsectData"
            type="datetime"
            placeholder="请选择过期时间"
            value-format="YYYY-MM-DD HH:mm:ss"
            :style="{ width: '100%' }"
            @change="handleChange"
          />
          <p style="color: rgb(245, 108, 108); font-size: 12px">请选择过期时间,不选择默认永久</p>
        </el-form-item>
        <el-form-item label="备注:">
          <el-input v-model="form.remark" placeholder="请输入备注"></el-input>
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>

<script setup>
import { getListApi } from '@/api/expense/niceNumberCategory.js'
import { addApi, editApi } from '@/api/expense/niceNumber.js'

import { formData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visibel, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')

// 获取靓号类别
const options = reactive([])
const gitNumberList = async () => {
  const { rows } = await getListApi()
  options.value = rows
}
gitNumberList()

// 过期时间
const handleChange = (params) => {
  form.expireDate = params
  form.isForever = 0
}
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑靓号' : '新增靓号'
  Object.assign(form, params || formData())
  visibel.value = true
}
const submit = () => {
  console.log(form)
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        await editApi(form)
        proxy.resetForm(formRef.value)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
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
<style>
.el-input-number {
  width: 100%;
}
.el-select {
  width: 100%;
}
</style>
