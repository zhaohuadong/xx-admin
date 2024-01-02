<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="column"
      :requestApi="getListApi"
      :otherHeight="0"
      :initParam="initParam"
      :dataCallback="dataCallback"
    >
      <!-- 投产比计算 -->
      <template #other>
        <div class="operation">
          <el-form ref="formRef" :v-model="form">
            <el-form-item label="用户投入产出比 :"></el-form-item>
            <el-form-item label="用户理论投入" prop="userIncoin">
              <el-input v-model.number="form.userIncoin"></el-input>
            </el-form-item>
            <el-form-item label="用户理论产出">
              <el-input v-model.number="form.userOutcoin"></el-input>
            </el-form-item>
            <el-form-item label="用户理论投入产出比">
              <p>{{ form.ratio }}</p>
            </el-form-item>
          </el-form>
        </div>
        <el-button type="primary" @click="editUserRatio">保存</el-button>
      </template>
      <!-- <template #rightAction>保存</template> -->
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">导出</el-button>
      </template>
    </MyProTable>
  </div>
</template>

<script setup name="ProportionUserOutput">
import { column, formOperation } from './constants.js'
import { getListApi, getUserRatioConfigApi, editUserRatioConfigApi } from '@/api/game/userRatioConfig.js'
import { reactive, ref } from 'vue'
const initParam = reactive({
  activeName: '1',
})

const myProTableRef = ref(null)
const formRef = ref()
const form = ref(formOperation())
// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}
// 获取理论用户产出投入
const getUserConfig = async () => {
  const { data } = await getUserRatioConfigApi()
  form.value = data
  // console.log(form)
}
getUserConfig()
// 设置用户投产比
const editUserRatio = async () => {
  delete form.value.ratio
  await editUserRatioConfigApi(form.value)
  getUserConfig()
}
</script>

<style scoped></style>
