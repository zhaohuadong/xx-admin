<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="奖池类型" prop="poolType">
        <el-select v-model="form.poolType" placeholder="请选择奖池类型" class="w-full">
          <el-option v-for="item in TYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="用户开启等级" prop="userOpeningLevel">
        <el-input v-model="form.userOpeningLevel" placeholder="请输入用户开启等级" />
      </el-form-item>
      <el-form-item label="开启日期" prop="startDate">
        <el-date-picker v-model="form.startDate" type="date" placeholder="请选择开启日期" />
      </el-form-item>
      <el-form-item label="结束日期" prop="endDate">
        <el-date-picker v-model="form.endDate" type="date" placeholder="请选择结束日期" />
      </el-form-item>
      <el-form-item label="启动状态" prop="startupStatus">
        <el-radio-group v-model="form.startupStatus">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="时间段" required>
        <div class="flex flex-col">
          <div v-for="(item, index) in form.timeSlotList" :key="index" class="mb-4 flex">
            <el-form-item
              :rules="[{ ...formRule.timeSlotStart[0], row: index, ipt: 1 }]"
              :prop="`timeSlotList.${index}.startTime`"
            >
              <el-input-number v-model="item.startTime" :min="0" :max="24" class="w-full" />
            </el-form-item>
            <span class="ml-4 mr-4">至</span>
            <el-form-item
              :rules="[{ ...formRule.timeSlotEnd[0], row: index, ipt: 2 }]"
              :prop="`timeSlotList.${index}.endTime`"
            >
              <el-input-number v-model="item.endTime" :min="0" :max="24" />
            </el-form-item>
            <el-button v-if="index !== 0" type="danger" class="ml-2" @click="toDeleteTimeSlot(item)">删除</el-button>
          </div>
          <el-button class="w-24" type="primary" @click="toAddTimeSlot">新增时间段</el-button>
        </div>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { editApi, addApi } from '@/api/game/currentAwardPool.js'
import { useToggle } from '@vueuse/core'
import { formData, TYPE } from '../constants'
import { getCurrentInstance, reactive, ref } from 'vue'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['resetList'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
const numIndex = ref(0)
// 再次全部校验输入框
const handleSave = () => {
  console.log(numIndex.value)
  numIndex.value += 1
  form.timeSlotList.forEach((item, index) => {
    formRef.value.validateField([`timeSlotList.${index}.startTime`, `timeSlotList.${index}.endTime`])
  })
}

const validatemin_time = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请选择时间段'))
  } else if (form.timeSlotList[rule.row].endTime <= form.timeSlotList[rule.row].startTime) {
    // numIndex.value = 0
    return callback(new Error('最小时间段不能大于和等于最大时间段'))
  } else if (rule.row > 0 && form.timeSlotList[rule.row].startTime <= form.timeSlotList[rule.row - 1].endTime) {
    numIndex.value = 0
    return callback(new Error(`金额需要超过${form.timeSlotList[rule.row - 1].endTime}`))
  } else if (
    rule.row < form.timeSlotList.length - 1 &&
    form.timeSlotList[rule.row].endTime >= form.timeSlotList[rule.row + 1].startTime
  ) {
    numIndex.value = 0
    if (rule.ipt === 2) callback(new Error(`金额不能超过${form.timeSlotList[rule.row + 1].startTime}`))
    callback()
  } else {
    if (numIndex.value < 1) {
      handleSave()
    } else {
      callback()
    }
  }
}
const formRule = {
  poolType: [
    {
      required: true,
      message: '请选择奖池类型',
      trigger: 'blur',
    },
  ],
  userOpeningLevel: [
    {
      required: true,
      // message: '请输入用户开启等级',
      validator: validatemin_time,
      trigger: 'blur',
    },
  ],
  startDate: [
    {
      required: true,
      message: '请选择开启时间',
      trigger: 'blur',
    },
  ],
  endDate: [
    {
      required: true,
      message: '请选择结束时间',
      trigger: 'blur',
    },
  ],
  startupStatus: [
    {
      required: true,
      message: '请选择启动状态',
      trigger: 'blur',
    },
  ],
  timeSlotStart: [
    {
      required: true,
      validator: validatemin_time,
      trigger: ['blur', 'change'],
    },
  ],
  timeSlotEnd: [
    {
      required: true,
      validator: validatemin_time,
      trigger: ['blur', 'change'],
    },
  ],
}

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'
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
      emits('resetList', { pageNum: 1 })
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
// 新增时间段
const toAddTimeSlot = () => {
  form.timeSlotList.push({
    startTime: 0,
    endTime: 0,
  })
  console.log(form.timeSlotList)
}
// 删除时间段
const toDeleteTimeSlot = (val) => {
  const timeSlot = form.timeSlotList.indexOf(val)
  if (timeSlot !== -1) {
    form.timeSlotList.splice(timeSlot, 1)
  }
}
defineExpose({ showDialog })
</script>
