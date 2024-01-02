<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="addAndEditFormRule" label-width="auto">
      <el-form-item label="礼物名称" prop="giftName">
        <el-input v-model="form.giftName" placeholder="请输入礼物名称" maxlength="30" />
      </el-form-item>
      <el-form-item label="所属类别" prop="categoryId">
        <el-select v-model="form.categoryId" placeholder="请选择所属类别" class="w-full">
          <el-option v-for="item in selectorData.categoryList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="礼物墙分类" prop="wallConfigId">
        <el-select v-model="form.wallConfigId" placeholder="请选择礼物墙类别" class="w-full">
          <el-option v-for="item in selectorData.wallConfigList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="礼物分类" prop="giftTag">
        <el-select
          ref="selRef"
          v-model="form.giftTag"
          placeholder="请选择礼物分类"
          class="w-full"
          @change="giftTagChange"
        >
          <el-option v-for="item in selectorData.tabConfigList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.giftTag === 38" label="等级要求" prop="nobleVip">
        <el-input v-model="form.nobleVip" placeholder="请输入等级" />
      </el-form-item>
      <el-form-item label="礼物图片" prop="url">
        <ImageUpload :modelValue="form.url" :limit="1" @queryImage="queryUrlImage" />
      </el-form-item>
      <el-form-item label="礼物效果图">
        <ImageUpload :modelValue="form.url2" :limit="1" @queryImage="queryUrl2Image" />
      </el-form-item>
      <el-form-item label="排序" prop="orderBy">
        <el-input-number v-model="form.orderBy" :min="0" placeholder="请输入排序" />
      </el-form-item>
      <el-form-item label="礼物价格" prop="price">
        <el-input-number v-model="form.price" :min="0" :precision="0" placeholder="请输入价格" />
      </el-form-item>
      <el-form-item label="礼物心动值" prop="charmNum">
        <el-input-number v-model="form.charmNum" :min="0" :precision="0" placeholder="请输入礼物心动值" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi, getCategoryListApi } from '@/api/gift/giftList.js'
import { useToggle } from '@vueuse/core'
import { nextTick, ref } from 'vue'
import { addAndEditFormData, addAndEditFormRule } from '../constants'
import { objectMerge } from '@/utils/index.js'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const selRef = ref()
const form = reactive(addAndEditFormData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  giftTagName.value = ''
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑礼物' : '新增礼物'
  objectMerge(form, params || addAndEditFormData())
  form?.nobleVip !== 0 && (giftTagName.value = '贵族')
  visible.value = true
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

// 下拉数据
const selectorData = ref({})
const getAllCateList = async () => {
  const { data } = await getCategoryListApi()
  selectorData.value = data
}
getAllCateList()
// 获取图片上传链接
const queryUrlImage = (params) => {
  form.url = params
}
// 获取图片上传链接
const queryUrl2Image = (params) => {
  form.url2 = params
}

// 礼物分类筛选值名称
const giftTagName = ref('')
// 礼物分类筛选框change事件
const giftTagChange = (val) => {
  nextTick(() => {
    const { selectedLabel } = selRef.value
    giftTagName.value = selectedLabel
    if (giftTagName.value !== '贵族') form.nobleVip = ''
  })
}
defineExpose({ showDialog })
</script>
