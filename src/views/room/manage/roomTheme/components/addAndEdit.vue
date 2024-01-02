<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="addAndEditFormRule" label-width="auto">
        <el-form-item label="主题名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入主题名称" />
        </el-form-item>
        <el-form-item label="主题图片" prop="pcCover">
          <ImageUpload :modelValue="form.pcCover" :limit="1" @queryImage="queryPcCover" />
        </el-form-item>
        <el-form-item label="主题效果">
          <ImageUpload :modelValue="form.pcCoverFull" :limit="1" @queryImage="queryPcCoverFull" />
        </el-form-item>
        <el-form-item label="是否免费" prop="price">
          <el-radio-group v-model="form.price">
            <el-radio :label="0">免费</el-radio>
            <el-radio :label="1">付费</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-space v-if="form.price === 1" direction="vertical">
          <div v-for="(item, index) in form.priceGap" :key="index" class="flex">
            <el-form-item
              :label="`价格`"
              :prop="'priceGap.' + index + '.days'"
              :rules="[
                {
                  required: true,
                  message: `自定义天数不能为空`,
                  trigger: 'blur',
                },
              ]"
            >
              <el-space>
                <el-input v-model="form.priceGap[index]['days']" placeholder="请填写自定义天数" class="!w-36 m-r-4" />
                天
              </el-space>
            </el-form-item>
            <el-form-item
              :prop="'priceGap.' + index + '.price'"
              :rules="[
                {
                  required: true,
                  message: `自定义价格不能为空`,
                  trigger: 'blur',
                },
              ]"
            >
              <el-space>
                <el-input v-model="form.priceGap[index]['price']" placeholder="请填写自定义价格" class="!w-36" />
                金币
              </el-space>
            </el-form-item>
            <el-button type="danger" @click="setDelKey(index)">删除</el-button>
          </div>
        </el-space>
        <el-form-item v-if="form.price === 1" label=" ">
          <el-button type="primary" @click="setAddPrice">新增价格</el-button>
        </el-form-item>
        <el-form-item label="出售状态" prop="state">
          <el-radio-group v-model="form.state">
            <el-radio :label="1">上架</el-radio>
            <el-radio :label="2">下架</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { useToggle } from '@vueuse/core'
import { addAndEditFormData, addAndEditFormRule } from '../constants'
import { addApi, editApi } from '@/api/room/bg.js'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(addAndEditFormData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑消息' : '新增消息'
  Object.assign(form, params || addAndEditFormData())
  visible.value = true
}

// 添加价格
const setAddPrice = () => {
  form.priceGap.push({
    price: '',
    days: '',
  })
}

// 删除价格
const setDelKey = (index) => {
  form.priceGap.splice(index, 1)
}

const submit = () => {
  if (!formRef.value) return
  if (form.price === 0) {
    form.priceGap = [
      {
        price: 0,
        days: 99999999,
      },
    ]
  }
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

// 获取主图图片链接
const queryPcCover = (params) => {
  form.pcCover = params
}

const queryPcCoverFull = (params) => {
  form.pcCoverFull = params
}

defineExpose({ showDialog })
</script>
