<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName" @click="handleClick">
        <el-tab-pane label="操作日志" name="operation">
          <OperationLogs></OperationLogs>
        </el-tab-pane>
        <el-tab-pane label="登录日志" name="login">
          <LoginLogs></LoginLogs>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup name="Operation">
import LoginLogs from './childComponents/loginLogs.vue'
import OperationLogs from './childComponents/operationLogs.vue'

const activeName = ref('operation')
// tab栏切换
const handleClick = (tab) => {
  console.log(tab.props)
}
</script>

<style lang="scss" scoped></style>
