<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="用户编号" prop="userCode">
        <el-input v-model="form.userCode" placeholder="请输入用户编号" clearable class="w-full" />
      </el-form-item>
      <el-form-item label="绑定奖池" prop="typesList">
        <el-checkbox-group v-model="form.typesList" @change="handleTypes">
          <el-checkbox v-for="(item, index) in poolList" :key="index" :label="item.id">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="过期时间" prop="expiredTime">
        <el-date-picker
          v-model="form.expiredTime"
          type="datetime"
          format="YYYY/MM/DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择过期时间"
        />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { getSpecialListApi } from '@/api/game/nextSpecialPoolConfiguration.js'

import { editApi, addApi } from '@/api/game/nextSpecialPoolUserList.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
import { getCurrentInstance, reactive, ref } from 'vue'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  if (params) {
    form.typesList = params.poolList.map((item) => {
      return item.id
    })
  }
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'
  Object.assign(form, params || formData())
  visible.value = true
}

// 获取特殊个人奖池分类列表
const poolList = ref([])
const gitJackpotList = async () => {
  const { data } = await getSpecialListApi()
  poolList.value = data
}
gitJackpotList()

const handleTypes = (params) => {
  form.types = params
}

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
defineExpose({ showDialog })
</script>
