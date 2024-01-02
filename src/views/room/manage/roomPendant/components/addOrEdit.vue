<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- 挂件名称 -->
      <el-form-item label="挂件名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入挂件名称" />
      </el-form-item>
      <!-- 状态 -->
      <el-form-item label="状态" prop="state">
        <el-radio-group v-model="form.state" placeholder="请选择">
          <el-radio :label="1">显示</el-radio>
          <el-radio :label="0">隐藏</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 上线时间 -->
      <el-form-item label="上线时间" prop="addDate">
        <el-date-picker
          v-model="form.addDate"
          type="datetime"
          value-format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择上线时间"
        />
      </el-form-item>
      <!-- 关闭时间 -->
      <el-form-item label="关闭时间" prop="closeDate">
        <el-date-picker
          v-model="form.closeDate"
          type="datetime"
          value-format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择关闭时间"
        />
      </el-form-item>
      <!-- 图标 -->
      <el-form-item label="图标" prop="picUrl">
        <ImageUpload v-model="form.picUrl" :limit="1" @queryImage="queryPicUrl" />
      </el-form-item>
      <!-- 操作类型 -->
      <el-form-item label="操作类型" prop="type">
        <el-select v-model="form.type" clearable placeholder="请选择">
          <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <!-- 链接 -->
      <el-form-item v-if="form.type === 1" label="链接" prop="linkUrl">
        <el-input v-model="form.linkUrl" placeholder="请输入外部链接" />
      </el-form-item>
      <!-- 位置 -->
      <el-form-item label="位置" prop="location">
        <div class="component-upload-image">
          <el-radio-group v-model="form.location" placeholder="请选择">
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
          </el-radio-group>
          <div class="el-upload__tip" style="color: #f56c6c">挂件图标竖着排列,定义1为上，3为下</div>
        </div>
      </el-form-item>
      <!-- 排序 -->
      <el-form-item label="排序">
        <el-input v-model="form.sort" type="number" :min="0" placeholder="请输入排序(不填默认为0)" />
      </el-form-item>
      <!-- 房间类型 -->
      <el-form-item label="房间类型">
        <el-select v-model="form.roomType" clearable placeholder="不选默认为全部">
          <el-option label="选项1" value="1" />
          <el-option label="选项2" value="2" />
        </el-select>
      </el-form-item>
      <!-- 显示等级 -->
      <el-form-item label="显示等级">
        <el-input v-model="form.showLevel" type="number" :min="0" placeholder="不填默认为0" />
      </el-form-item>
      <!-- 可见用户 -->
      <el-form-item label="可见用户">
        <!-- <el-select v-model="form.showUsers" clearable multiple placeholder="不选则默认为全部用户可见">
          <el-option label="选项1" :value="1" />
          <el-option label="选项2" :value="2" />
        </el-select> -->
        <el-input v-model="form.showUsers" placeholder="不输入默认为全部用户可见" />
      </el-form-item>
      <!-- 可见房间 -->
      <el-form-item label="可见房间">
        <!-- <el-select v-model="form.showRooms" clearable multiple placeholder="不选则默认为全部房间可见">
          <el-option label="选项1" :value="1" />
          <el-option label="选项2" :value="2" />
        </el-select> -->
        <el-input v-model="form.showRooms" placeholder="不输入默认为全部房间可见" />
      </el-form-item>
      <!-- 显示时间段 -->
      <el-form-item label="显示时间段" prop="showTime">
        <div v-for="(item, index) in form.showTime" :key="index" style="margin: 0 0 5px 5px">
          <el-input-number v-model="item.start" :min="0" :max="24" placeholder="请输入数字" />
          <span style="margin: 0 10px">至</span>
          <el-input-number v-model="item.end" :min="0" :max="24" placeholder="请输入数字" />
        </div>
        <el-button type="primary" style="margin-left: 20px" @click="addShowTime">新增时间段</el-button>
      </el-form-item>
      <!-- 可玩时间段 -->
      <el-form-item label="可玩时间段" prop="playTime">
        <div v-for="(item, index) in form.playTime" :key="index" style="margin: 0 0 5px 5px">
          <el-input-number v-model="item.start" :min="0" :max="24" placeholder="请输入数字" />
          <span style="margin: 0 10px">至</span>
          <el-input-number v-model="item.end" :min="0" :max="24" placeholder="请输入数字" />
        </div>
        <el-button type="primary" style="margin-left: 20px" @click="addPlayTime">新增时间段</el-button>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { editApi, addApi } from '@/api/room/decoration.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule, selectOptions } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 判断是新增或编辑
let isEdit = false
const titleName = ref('')

// 显示弹窗
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  isEdit = !!params

  titleName.value = isEdit ? '编辑' : '新增'
  // 初始化表单值
  Object.assign(form, params || formData())
  // 新增是状态为隐藏
  form.state = params ? params.state : 0
  visible.value = true
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit) {
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

// 新增时间段
const addShowTime = () => {
  form.showTime.push({
    start: 0,
    end: 0,
  })
}

// 可玩时间段
const addPlayTime = () => {
  form.playTime.push({
    start: 0,
    end: 0,
  })
}

// 获取图标链接
const queryPicUrl = (params) => {
  form.picUrl = params
}
defineExpose({ showDialog })
</script>
