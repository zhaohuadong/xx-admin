<template>
  <el-dialog v-model="dialogVisible" :title="titleName" width="900">
    <el-form ref="formRef" label-width="120px" :model="form" :rules="formRule" style="max-width: 85%">
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="form.roleName" placeholder="最多30个中文字符" max="30"></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input
          v-model="form.roleDesc"
          type="textarea"
          placeholder="最多500个中文字符"
          max="500"
          :rows="3"
        ></el-input>
      </el-form-item>
      <!-- <div class="flex justify-between items-center"></div> -->
      <el-form-item label="状态" prop="status" style="margin: 0">
        <el-switch v-model="form.status" :active-value="'0'" :inactive-value="'1'"></el-switch>
      </el-form-item>

      <!-- <el-form-item label="角色权限" prop="status" style="margin: 0">
        <el-checkbox v-model="checked1" :true-label="1" :false-label="0" label="复制" size="large" />
        &nbsp; &nbsp;
        <el-select v-model="form.roleKey">
          <el-option
            v-for="item in keyOptions"
            :key="item.roleId"
            :label="item.roleName"
            :value="item.roleKey"
          ></el-option>
        </el-select>
        &nbsp; 的角色权限
      </el-form-item> -->
      <el-form-item label="角色权限" prop="roleKey" style="margin: 0">
        <el-input v-model="form.roleKey" placeholder="请输入角色权限"></el-input>
      </el-form-item>
    </el-form>
    <hr class="my-5" />
    <div class="accessHeader flex justify-end">
      <el-button type="primary" @click="handleClearAll">清空</el-button>
      <el-button type="primary" @click="handleCheckAll">全选</el-button>
    </div>
    <div class="accessContent px-10">
      <el-tree
        ref="treeRef"
        :data="treeData"
        show-checkbox
        default-expand-all
        node-key="id"
        highlight-current
        :expand-on-click-node="false"
        :props="{ class: customNodeClass, ...defaultProps }"
        @check="handleCheckChange"
      ></el-tree>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { handleTree } from '@/utils'
import { editApi, addApi, getListApi as getKeyApi } from '@/api/systemManage/role.js'
import { getListApi } from '@/api/systemManage/menu'
import { formData, formRule } from '../constant'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

let resData = []
const treeData = ref([])
const handleGetData = async () => {
  const { data } = await getListApi()
  treeData.value = handleTree(data, 'menuId')
  resData = data
}
handleGetData()

// 获取权限
const keyOptions = ref()
const getKeyList = async () => {
  const { rows } = await getKeyApi()
  keyOptions.value = rows
}
getKeyList()

// 弹框开关
const dialogVisible = ref(false)

// 判断是新增或编辑
let isEdit = false
const titleName = ref('')
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  isEdit = !!params

  titleName.value = isEdit ? '编辑' : '新增'
  Object.assign(form, params || formData())

  dialogVisible.value = true
  if (params && params.menuIds) {
    nextTick(() => {
      treeRef.value.setCheckedKeys(params.menuIds, false)
    })
  } else {
    nextTick(() => {
      treeRef.value.setCheckedKeys([], false)
    })
  }
}
// 表单
const formRef = ref()
const form = reactive(formData())

// 树组件
const treeRef = ref()
const customNodeClass = (data, node) => {
  if (data.haveAccess) {
    return 'is-haveAccess'
  }
  return null
}
const defaultProps = { children: 'children', label: 'menuName' }
// 节点改变事件
const handleCheckChange = (data, checked) => {
  form.menuIds = checked.checkedKeys
}
// 全选
const handleCheckAll = () => {
  const arr = resData.map((item) => {
    return item.menuId
  })
  treeRef.value.setCheckedKeys(arr, false)
  form.menuIds = arr
}
// 清空
const handleClearAll = () => {
  treeRef.value.setCheckedKeys([], false)
  form.menuIds = []
  console.log(form.menuIds)
}

//
const handleSave = () => {
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
      dialogVisible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}

defineExpose({
  showDialog,
})
</script>

<style lang="scss" scoped>
.accessContent {
  height: 300px;
  overflow: auto;
}

:deep(.el-tree-node.is-expanded.is-haveAccess) {
  display: flex;
  justify-content: space-between;
}

:deep(.el-tree-node.is-expanded.is-haveAccess > .el-tree-node__content) {
  width: 200px;
}
:deep(.el-tree-node.is-expanded.is-haveAccess > .el-tree-node__children) {
  width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

:deep(.el-tree-node.is-expanded.is-haveAccess > .el-tree-node__children .el-tree-node__content) {
  padding-left: 18px !important;
}

:deep(.is-haveAccess > .el-tree-node__children > div) {
  width: 25%;
}
</style>
