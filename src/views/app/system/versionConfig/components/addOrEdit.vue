<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="发版类型" prop="appType">
        <el-radio-group v-model="form.appType">
          <el-radio :label="1">Android</el-radio>
          <el-radio :label="2">Ios</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="选择应用" prop="appCode">
        <el-radio-group v-model="form.appCode">
          <el-radio :label="1">闲闲</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <el-space direction="vertical"> -->
      <!-- <el-form-item
        :label="`配置值${index + 1}`"
        v-for="(item, index) in form.keys"
        :key="index"
        :prop="'keys.' + index"
        :rules="[
          {
            required: true,
            message: `配置值${index + 1}不能为空`,
            trigger: 'blur',
          },
        ]"
      >
        <el-space>
          <el-input v-model="form.keys[index]" placeholder="请填写key" class="!w-24 m-r-4" />
          <el-input v-model="form.values[index]" placeholder="请填写value" class="!w-24" />
          <el-button v-if="form.keys.length > 1" type="primary" @click="setDelKey(index)">删除</el-button>
        </el-space>
      </el-form-item> -->
      <!-- </el-space> -->
      <el-form-item label="配置值" required>
        <div class="flex flex-col">
          <div v-for="(item, index) in form.settingValue" :key="index" class="mb-4 flex">
            <el-form-item
              :prop="`settingValue.${index}.key`"
              :rules="{ required: true, message: 'key值不能为空', trigger: 'blur' }"
            >
              <el-input v-model="form.settingValue[index].key" class="!w-28" type="text" placeholder="请输入key" />
            </el-form-item>
            <span class="ml-2 mr-2"></span>
            <el-form-item
              :prop="`settingValue.${index}.value`"
              :rules="{ required: true, message: 'value值不能为空', trigger: 'blur' }"
            >
              <el-input v-model="form.settingValue[index].value" class="!w-28" type="text" placeholder="请输入value" />
            </el-form-item>
            <el-button v-if="index > 0" type="danger" class="ml-4" @click="setDelKey(index)">删除</el-button>
          </div>
          <el-button class="w-24" type="primary" @click="setAddKey">添加key</el-button>
        </div>
      </el-form-item>

      <el-form-item label="控制开关" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio label="1">开</el-radio>
          <el-radio label="2">关</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/app/version.js'
import { formData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗设置
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑版本' : '新增版本'
  Object.assign(form, params || formData())
  if (isEdit.value) {
    // radio 的值类型转换
    params.appType = params.appType + ''
    const settingData = JSON.parse(form.settingContent)
    const settingList = []
    for (const key in settingData) {
      settingList.push({ key, value: settingData[key] })
    }
    form.settingValue = settingList
  }

  visible.value = true
}
// 提交form表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      const settingContent = {}
      form.settingValue.forEach((item, index) => {
        Object.assign(settingContent, { [String(item.key)]: String(item.value) })
      })
      form.settingContent = settingContent

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
// 添加key
const setAddKey = () => {
  form.settingValue.push({ key: '', value: '' })
}
// 删除Key
const setDelKey = (index) => {
  form.settingValue.splice(index, 1)
}
defineExpose({ showDialog })
</script>
