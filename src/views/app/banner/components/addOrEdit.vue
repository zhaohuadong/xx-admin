<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入轮播图名称" />
      </el-form-item>
      <el-form-item label="轮播图图片" prop="imgUrl">
        <ImageUpload :modelValue="form.imgUrl" :limit="1" @queryImage="queryImage" />
      </el-form-item>
      <!-- <el-form-item label="文件上传" prop="fileUrl">
        <FileUpload :modelValue="form.fileUrl" @queryFile="queryFile" />
      </el-form-item> -->
      <el-form-item label="跳转类型" prop="linkType">
        <el-radio-group v-model="form.linkType">
          <el-radio :label="0">无跳转</el-radio>
          <el-radio :label="1">外部链接</el-radio>
          <el-radio :label="2">页面跳转</el-radio>
          <el-radio :label="3">指定房间</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="form.linkType === 1 || form.linkType === 2" label="链接地址" prop="linkTarget">
        <el-input v-model="form.linkTarget" placeholder="请输入链接地址" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model.number="form.sort" :min="1" placeholder="请输入排序" />
      </el-form-item>
      <el-form-item label="发送时间" prop="sendType">
        <el-radio-group v-model="form.sendType">
          <el-radio :label="0">直接发送</el-radio>
          <el-radio :label="1">定时发送</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="展示时间" prop="date">
        <el-date-picker
          v-model="form.date"
          type="datetimerange"
          value-format="YYYY-MM-DD HH:mm:ss"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="setCheckDate"
        />
      </el-form-item>
      <el-form-item v-if="form.linkType === 3" label="跳转房间" prop="crIds">
        <el-input v-model="form.crIds" placeholder="请输入跳转房间,多个以 ; 间隔" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/app/slideshow.js'
import { sendformData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'
// import { timeToTimestamp } from '@/utils/date'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
})

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(sendformData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗设置
const showDialog = (params, tabVal) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑版本' : '新增版本'

  Object.assign(form, params || sendformData())
  form.date = [form.validDate, form.expireDate]
  form.type = tabVal === '' ? 0 : tabVal
  form.type = +props.type
  visible.value = true
}

// 获取选中日期
const setCheckDate = (param) => {
  form.validDate = param[0]
  form.expireDate = param[1]
}

// 提交form表单
const submit = () => {
  console.log(form)
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
// 获取图片上传链接
const queryImage = (params) => {
  console.log(params)
  form.imgUrl = params
  console.log(form)
}
// 获取文件上传链接
// const queryFile = (params) => {
//   form.fileUrl = params
//   console.log(params)
// }
defineExpose({ showDialog })
</script>
