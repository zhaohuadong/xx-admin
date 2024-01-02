<template>
  <MyDialog :model-value="visible" :title="title" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="任务图标" prop="iconUrl">
        <!-- <el-input v-model="form.iconUrl" placeholder="请输入任务名称" /> -->
        <ImageUpload :modelValue="form.iconUrl" :limit="1" @queryImage="queryImage" />
      </el-form-item>
      <el-form-item label="任务名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入任务名称" />
      </el-form-item>
      <el-form-item label="任务类型" prop="categoryId">
        <el-select v-model="form.categoryId" :disabled="isEdit" class="w-full" placeholder="请选择任务类型">
          <el-option v-for="item in list" :key="item.id" :label="item.title" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="任务内容" prop="content">
        <el-input
          v-model="form.content"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          maxlength="500"
          placeholder="请输入备注"
        />
      </el-form-item>
      <el-form-item label="条件值" prop="target">
        <el-input v-model.number="form.target" type="number" :min="0" placeholder="请输入条件值">
          <template #suffix>天</template>
        </el-input>
      </el-form-item>
      <el-form-item label="奖品类型" prop="prizeType">
        <el-radio-group v-model="form.prizeType" @change="handleChange">
          <el-radio :label="1">个性商品</el-radio>
          <el-radio :label="2">勋章</el-radio>
          <el-radio :label="3">积分(虾米币)</el-radio>
          <el-radio :label="4">礼包</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="奖品" prop="prizeId">
        <el-select v-model="form.prizeId" filterable class="w-full" placeholder="请选择奖品">
          <el-option v-for="item in options" :key="item.id" :label="item.title" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="奖品数量/天数" prop="prizeNumber">
        <el-input v-model.number="form.prizeNumber" placeholder="请输入" />
      </el-form-item>
      <!-- 跳转开关 -->
      <el-form-item label="跳转开关" prop="skipSwitch">
        <el-radio-group v-model="form.skipSwitch">
          <el-radio :label="0">开启</el-radio>
          <el-radio :label="1">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 跳转类型 -->
      <el-form-item v-if="form.skipSwitch === 0" label="跳转类型" prop="skipType">
        <el-select v-model="form.skipType">
          <el-option label="不跳转" :value="0"></el-option>
          <el-option label="任意房间" :value="1"></el-option>
          <el-option label="实名认证" :value="2"></el-option>
          <el-option label="充值界面" :value="3"></el-option>
          <el-option label="福利专区" :value="4"></el-option>
          <el-option label="个性商城" :value="5"></el-option>
          <el-option label="个人资料" :value="6"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态" prop="hidden">
        <el-radio-group v-model="form.hidden">
          <el-radio :label="0">上架</el-radio>
          <el-radio :label="1">下架</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { getCategoryListApi, addApi, editApi, getPrizeApi } from '@/api/activity/task.js'

import { useToggle } from '@vueuse/core'
import { reactive } from 'vue'
import { formData, formRule } from '../constants'
const props = defineProps({
  type: {
    type: Number,
    required: true,
  },
})
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
const [visible, toggle] = useToggle()
const formRef = ref()
const title = ref()
const form = reactive(formData())
const list = ref()
const options = ref()
const isEdit = ref(true)

// 获取任务类型列表
;(async function () {
  const { data } = await getCategoryListApi()
  list.value = data
})()
// 获取奖励列表
;(async function () {
  const { data } = await getPrizeApi({ type: 1 })
  options.value = data
})()

// 获取图片上传链接
const queryImage = (params) => {
  // console.log(params)
  form.iconUrl = params
}

const handleChange = (params) => {
  form.prizeId = ''
  ;(async function () {
    const { data } = await getPrizeApi({ type: params })
    options.value = data
  })()
}
// 弹窗打开
const showDialog = (params = null) => {
  isEdit.value = !!params
  if (!params) {
    title.value = '新增任务'
    form.type = props.type
  } else {
    title.value = '编辑任务'
    ;(async function () {
      const { data } = await getPrizeApi({ type: params.prizeType })
      options.value = data
    })()
  }
  proxy.resetForm(formRef.value)
  Object.assign(form, params || formData())
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
      emits('queryTable')
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
