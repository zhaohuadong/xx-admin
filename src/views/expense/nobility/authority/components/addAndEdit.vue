<template>
  <div>
    <MyDialog :model-value="visibel" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto" mx-auto>
        <el-row>
          <el-col :span="12">
            <el-form-item label="权限名称:" prop="powerName">
              <el-input v-model="form.powerName" placeholder="请输入权限名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :style="{ paddingLeft: '10px' }">
            <el-form-item label="权限说明:" prop="remark">
              <el-input v-model="form.remark" placeholder="请输入权限说明"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="高亮图标:">
              <ImageUpload :modelValue="form.url" :isShowTip="false" @queryImage="queryImageHighlight" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="灰色图标:">
              <ImageUpload :modelValue="form.grayUrl" :isShowTip="false" @queryImage="queryImageGrayIcon" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="详情:">
              <ImageUpload :modelValue="form.detailUrl" :isShowTip="false" @queryImage="queryImageDetailIcon" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="排序:" prop="sort">
              <el-input-number v-model="form.sort"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="状态:">
              <el-radio-group v-model="form.state" class="ml-4">
                <el-radio :label="'0'" size="large">显示</el-radio>
                <el-radio :label="'1'" size="large">隐藏</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </MyDialog>
  </div>
</template>

<script setup>
import { addApi, editApi } from '@/api/expense/knighthoodPower.js'
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

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑爵位权限' : '新增爵位权限'
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
// 获取图片上传链接
const queryImageHighlight = (params, text) => {
  form.url = params
}
const queryImageGrayIcon = (params, text) => {
  form.grayUrl = params
}
const queryImageDetailIcon = (params, text) => {
  form.detailUrl = params
}

defineExpose({ showDialog })
</script>
