<template>
  <el-dialog v-model="dialogVisible" title="批量移动" width="600">
    <el-form ref="formRef" label-width="120px" :model="form" :rules="rules" style="max-width: 85%">
      <el-form-item label="上级部门" prop="value">
        <!-- <el-select v-model="form.value" placeholder="Select" style="width: 100%"></el-select> -->
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
        <el-cascader
          v-model="form.value"
          style="width: 100%"
          :options="options"
          :props="cascaderProps"
          clearable
          filterable
        />
      </el-form-item>
      <el-form-item label="子级部门">
        <el-select v-model="form.child" placeholder="Select" style="width: 100%">
          <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { handleTree } from '@/utils'

import { getListApi } from '@/api/systemManage/department'
const cascaderProps = { value: 'deptId', label: 'deptName', emitPath: false }

const options = ref([])
const gitList = async () => {
  const res = await getListApi()
  options.value = handleTree(res.data, 'deptId')
}
gitList()

// 弹框开关
const dialogVisible = ref(false)
// 表单
const form = reactive({})
// 表单验证
const rules = reactive({
  value: [
    {
      required: true,
      message: '请选择上级部门',
      trigger: 'change',
    },
  ],
})
// 上级部门下拉框
// const options = [
//   {
//     value: 'Option1',
//     label: 'Option1',
//   },
//   {
//     value: 'Option2',
//     label: 'Option2',
//   },
//   {
//     value: 'Option3',
//     label: 'Option3',
//   },
//   {
//     value: 'Option4',
//     label: 'Option4',
//   },
//   {
//     value: 'Option5',
//     label: 'Option5',
//   },
// ]
const options1 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

defineExpose({
  dialogVisible,
})
</script>

<style lang="scss" scoped></style>
