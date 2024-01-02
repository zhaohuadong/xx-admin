<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <MyReturn :modelValue="{ name: 'RoomList' }"></MyReturn>
      </div>
    </el-card>
    <el-card class="!overflow-auto">
      <!-- <template #default> -->
      <el-form ref="formRef" label-width="auto" :model="form" :rules="editFormRule" class="w-full">
        <el-row :gutter="24" class="h-20 !flex items-center">
          <el-col :span="10" :offset="1">
            <el-form-item label="房间名称" prop="roomTitle">
              <el-input v-model="form.roomTitle" type="text" placeholder="请输入房间名称" />
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="房间号" prop="roomId">
              <el-input v-model="form.roomId" type="text" placeholder="请输入房间号" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="h-20 !flex items-center">
          <el-col :span="10" :offset="1">
            <el-form-item label="房间密码">
              <el-input
                v-model.number="form.roomPwd"
                maxlength="6"
                type="password"
                :show-password="true"
                placeholder="请输入房间密码"
              />
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="房间欢迎语">
              <el-input v-model="form.welcomeMsg" type="text" placeholder="请输入房间欢迎语" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="h-20 !flex items-center">
          <el-col :span="10" :offset="1">
            <el-form-item label="话题主题">
              <el-input v-model="form.roomTopicTitle" type="text" placeholder="请输入话题主题" />
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="话题内容">
              <el-input v-model="form.roomTopic" type="text" placeholder="请输入话题内容" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="h-20 !flex items-center">
          <el-col :span="10" :offset="1">
            <el-form-item label="房间类别">
              <el-select v-model="form.roomCategoryId" clearable placeholder="请选择房间类别" class="w-full">
                <el-option v-for="(item, index) in roomOptions" :key="index" :label="item.name" :value="item.id" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="房型类型">
              <el-select v-model="form.showType" clearable placeholder="请选择房型类型" class="w-full">
                <el-option
                  v-for="(item, index) in optionsPersonType"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="h-20 !flex items-center">
          <el-col :span="10" :offset="1">
            <el-form-item label="房间标签">
              <el-select v-model="form.roomTagId" clearable placeholder="请选择房间标签" class="w-full">
                <el-option
                  v-for="(item, index) in optionsTags"
                  :key="index"
                  :label="item.roomTag"
                  :value="item.roomTagId"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="10" :offset="1">
            <el-form-item label="房间音效">
              <el-select v-model="form.roomVoice" clearable placeholder="请选择房间音效" class="w-full">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col> -->
        </el-row>

        <el-row :gutter="24">
          <el-col :span="10" :offset="1">
            <el-form-item label="封面图">
              <ImageUpload :modelValue="form.roomCover" :limit="1" @queryImage="queryImageCover" />
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="背景图">
              <ImageUpload :modelValue="form.roomBackground" :limit="1" @queryImage="queryImage" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="h-20 !flex items-center">
          <el-col :span="10" :offset="1">
            <el-form-item label="设置老板麦" prop="bossMicrophone">
              <el-radio-group v-model="form.bossMicrophone" class="ml-4">
                <el-radio :label="1">显示</el-radio>
                <el-radio :label="0">隐藏</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="状态" prop="showStatus">
              <el-radio-group v-model="form.showStatus" class="ml-4">
                <el-radio :label="1">显示</el-radio>
                <el-radio :label="0">隐藏</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="h-20 !flex items-center">
          <el-col :span="10" :offset="1">
            <el-form-item label="房主模式" prop="roomOwnerModel">
              <el-radio-group v-model="form.roomOwnerModel" class="ml-4">
                <el-radio :label="0">无权限</el-radio>
                <el-radio :label="1">开启</el-radio>
                <el-radio :label="2">关闭</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <div class="!flex !justify-center w-full">
            <el-button @click="cancleSubmit">取消</el-button>
            <el-button type="primary" @click="submit">提交</el-button>
          </div>
        </el-form-item>
      </el-form>
      <!-- </template> -->
    </el-card>
  </div>
</template>
<script setup>
import { editFormData, editFormRule, optionsPersonType } from './constants'
import { getRoomInfoApi, editApi } from '@/api/room/room.js'
import { useRoute } from 'vue-router'

import { getListApi } from '@/api/room/type.js'
import { getListApi as getTagsListApi } from '@/api/room/tag.js'
const route = useRoute()

const { proxy } = getCurrentInstance()
const form = reactive(editFormData())
const formRef = ref()

// 获取表单
;(async function () {
  const { data } = await getRoomInfoApi({ id: route.query.id })
  if (optionsTags && roomOptions) {
    Object.assign(form, data)
  }

  if (data.roomCategoryType === 1) {
    form.type = data.roomCategoryId
  } else {
    form.singleCategory = data.roomCategory
  }
})()

// 获取房间类别
const roomOptions = ref()
;(async function () {
  const { rows } = await getListApi()
  const { rows: personRows } = await getListApi({ type: 2 })
  roomOptions.value = [...rows, ...personRows]
  console.log(roomOptions.value)
})()

// 获取房间分类id
// const handleRoomCategoryId = (params) => {
//   form.roomCategoryId = params
// }

// 获取标签
const optionsTags = ref()
;(async function () {
  const { rows } = await getTagsListApi()
  const { rows: personType } = await getTagsListApi({ tagType: 2 })
  optionsTags.value = [...rows, ...personType]
})()

// 获取图片上传链接
const queryImage = (params) => {
  form.roomBackground = params
}

const queryImageCover = (params) => {
  form.roomCover = params
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await editApi(form)
      proxy.$modal.msgSuccess(`编辑成功`)
    } else {
      console.log('error submit')
      return false
    }
  })
}

// 取消表单
const cancleSubmit = () => {
  proxy.resetForm(formRef.value)
}
</script>
<style lang="scss" scoped></style>
