<template>
  <div class="app-container">
    <el-space :fill="true" wrap>
      <el-card>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="房间编号">
            <el-input v-model="formInline.user" placeholder="请输入房间编号" />
          </el-form-item>
          <el-form-item label="用户编号">
            <el-input v-model="formInline.region" placeholder="请输入用户编号" />
          </el-form-item>
        </el-form>
        <template #header>
          <div class="flex justify-between">
            <span>房间误踢解禁</span>
            <el-button type="primary" @click="onSubmit">提 交</el-button>
          </div>
        </template>
      </el-card>
      <el-card>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="用户编号">
            <el-input v-model="formInline.user" placeholder="请输入用户编号" />
          </el-form-item>
          <el-form-item label="增加次数">
            <el-input-number v-model="formInline.region" :min="1" :max="10" />
          </el-form-item>
        </el-form>
        <template #header>
          <div class="flex justify-between">
            <span>增加提现次数配置</span>
            <el-button type="primary" @click="onSubmit">提 交</el-button>
          </div>
        </template>
      </el-card>
      <el-card>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="用户编号">
            <el-input v-model="formInline.user" placeholder="请输入用户编号" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="formInline.mobile" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="强制（注销手机号已注册账号）">
            <el-radio-group v-model="formInline.isOrNot">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <template #header>
          <div class="flex justify-between">
            <span>用户手机号绑定</span>
            <el-button type="primary" @click="onSubmit">提 交</el-button>
          </div>
        </template>
      </el-card>
      <el-card>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="白名单用户编号">
            <el-input v-model="formInline.user" placeholder="请输入用户编号，多个用户以“；”间隔" />
          </el-form-item>
        </el-form>
        <template #header>
          <div class="flex justify-between">
            <span>免验证码登录白名单（在换设备情况下）</span>
            <el-button type="primary" @click="onSubmit">提 交</el-button>
          </div>
        </template>
      </el-card>
    </el-space>
  </div>
</template>
<script setup name="Pay">
// import { columns } from './constants'
// import { getListApi, deleteApi } from '@/api/system/message.js'

// const getList = (params) => {
//   const newParams = JSON.parse(JSON.stringify(params))
//   newParams.startTime = newParams.updateTime?.[0] ?? ''
//   newParams.endTime = newParams.updateTime?.[1] ?? ''
//   delete newParams.updateTime
//   return getListApi(newParams)
// }
const formInline = reactive({
  user: '',
  region: '',
  mobile: '',
  isOrNot: 0,
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
