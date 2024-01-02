<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in blindBoxList" :key="index" :label="item.label" :name="item.value" />
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="gitUserApi"
        :otherHeight="55"
        :initParam="initParam"
        :dataCallback="dataCallback"
      ></MyProTable>
    </el-card>
  </div>
</template>

<script setup name="SpecialPoolUserList">
import { columns, blindBoxList } from './constants.js'
import { gitUserApi } from '@/api/game/blindbox.js'
import { reactive, ref } from 'vue'
const initParam = reactive({
  type: 1,
})
// tab栏切换
const handleClick = (e) => {
  initParam.activeName = e.props.name
  myProTableRef.value.changeCurrent(1)
}
const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}
</script>

<style scoped></style>
