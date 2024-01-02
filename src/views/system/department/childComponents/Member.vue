<template>
  <div class="flex">
    <div class="left mr-5" style="width: 250px">
      <el-tree
        ref="treeRef"
        :data="data.treeData"
        :props="defaultProps"
        default-expand-all
        node-key="deptId"
        highlight-current
        :expand-on-click-node="false"
        :current-node-key="currentNodeKey"
        @node-click="handleNodeClick"
      />
    </div>
    <div class="right flex-1">
      <div class="flex justify-between items-center mb-3">
        <div>{{ departmentName }}</div>
        <div>
          <!-- <el-button type="primary" :disabled="choiceList.length === 0" @click="handleMoveAll">批量移动</el-button> -->
          <el-button type="primary" @click="setAddOrEditPage('')">添加员工</el-button>
          <!-- <el-button type="danger" :disabled="choiceList.length === 0">批量删除</el-button> -->
        </div>
      </div>
      <el-table
        ref="tableRef"
        class="mb-2"
        :data="data.tableData"
        :height="tableH"
        border
        stripe
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="nickName" label="员工姓名" />
        <el-table-column prop="phonenumber" label="手机号码" />
        <el-table-column prop="remark" label="员工角色" />
        <el-table-column prop="status" label="状态">
          <template #default="{ row }">
            {{ row.status === '0' ? '在职' : '离职' }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="{ row }">
            <el-button type="primary" link @click="setAddOrEditPage(row)">编辑</el-button>
            <el-button type="danger" link @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <MyPagination :total="data.total" :page="data.page" @pagination="handleChangePagination"></MyPagination>
    </div>
  </div>

  <MoveAll ref="moveAll"></MoveAll>
  <AddMember ref="addMember" @queryTable="handleGetSysuserList(data.queryForm)"></AddMember>
</template>

<script setup>
import { handleTree } from '@/utils'
import MoveAll from './MoveAll.vue'
import AddMember from './AddMember.vue'
import { getListApi } from '@/api/systemManage/department'
import * as sysuser from '@/api/systemManage/sysuser'
import { useConfirm } from '@/hooks/useConfirm'

const tableH = window.innerHeight - 294

const data = reactive({
  treeData: [],
  queryForm: {
    pageNum: 1,
    pageSize: 10,
    deptId: null,
  },
  total: 0,
  tableData: [],
  page: 1,
})

// 获取部门树列表
const handleGetDeptListApi = async () => {
  const res = await getListApi()
  data.treeData = handleTree(res.data, 'deptId')
}
handleGetDeptListApi()

const defaultProps = {
  children: 'children',
  label: 'deptName',
}
// 树组件结点选择
const treeRef = ref()
const departmentName = ref('')
const currentNodeKey = ref('')
const handleNodeClick = (val) => {
  // if (!val.children) {
  // }
  departmentName.value = val.deptName
  data.queryForm.deptId = val.deptId
  currentNodeKey.value = val.deptId
  // 调用接口发送请求
  handleGetSysuserList(data.queryForm)
}

// 获取成员信息
const handleGetSysuserList = async (params) => {
  const { rows, total, pageNum } = await sysuser.getListApi(params)
  data.tableData = rows
  data.total = total
  data.page = pageNum
}
handleGetSysuserList()

const handleChangePagination = (params) => {
  data.queryForm.pageNum = params.page
  data.queryForm.pageSize = params.limit
  handleGetSysuserList(data.queryForm)
}

// 表格选择
const choiceList = ref([])
const handleSelectionChange = (val) => {
  choiceList.value = val
  // console.log(val)
}

// 批量移动
const moveAll = ref()
// const handleMoveAll = () => {
//   moveAll.value.dialogVisible = true
// }

// 添加员工
const addMember = ref()
const setAddOrEditPage = (params) => {
  addMember.value.showDialog(data.treeData, params)
}

// 删除
const handleDelete = (row) => {
  useConfirm({ api: () => sysuser.deleteApi({ id: row.userId }), tip: '员工删除后，将无法恢复，是否删除' }).then(() => {
    data.queryForm.pageSize = 10
    handleGetSysuserList(data.queryForm)
  })
}

defineExpose({ handleNodeClick, handleGetSysuserList })
</script>

<style lang="scss" scoped></style>
