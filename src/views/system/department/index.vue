<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName" @tab-change="handleChange">
        <el-tab-pane label="部门管理" name="department">
          <Department ref="department" @handle-click-num="handleClickNum"></Department>
        </el-tab-pane>
        <el-tab-pane label="成员管理" name="member">
          <Member ref="memberRef"></Member>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup name="Department">
import Department from './childComponents/Department.vue'
import Member from './childComponents/Member.vue'

const activeName = ref('department')

const memberRef = ref()
const department = ref()
const handleClickNum = (e) => {
  activeName.value = 'member'
  memberRef.value.handleNodeClick(e)
}

const handleChange = (e) => {
  console.log(e)
  if (e === 'department') {
    department.value.changeCurrent()
  } else {
    memberRef.value.handleGetSysuserList()
  }
}
</script>

<style lang="scss" scoped></style>
