<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :dataCallback="dataCallback">
      <template #action="{ row }">
        <router-link :to="{ path: '/room/manage/roomInfo', query: { id: row.roomId } }">
          <el-button link type="primary">详情</el-button>
        </router-link>
        <router-link :to="{ path: '/room/manage/roomEdit', query: { id: row.roomId } }">
          <el-button link type="primary">编辑</el-button>
        </router-link>
        <el-button link>
          <el-dropdown>
            <el-button link type="primary">
              更多
              <el-icon><icon-ep-caret-bottom /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <router-link
                  :to="{
                    path: '/room/manage/roomFlow',
                    query: {
                      id: row.roomId,
                      roomTitle: row.roomTitle,
                    },
                  }"
                >
                  <el-dropdown-item>房间流水</el-dropdown-item>
                </router-link>
                <el-dropdown-item @click="setGivepopularityPage(row)">赠送人气</el-dropdown-item>
                <el-dropdown-item v-if="row.banStatus !== 1" @click="setRoomForbidden(row)">封禁房间</el-dropdown-item>
                <el-dropdown-item v-else @click="unsealedRoom(row)">解封房间</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-button>
      </template>
    </MyProTable>
    <!--赠送人气-->
    <GivePopularity ref="givePopularity" @queryTable="resetList" />
    <!--封禁房间-->
    <RoomForbidden ref="roomForbidden" @queryTable="resetList" />
  </div>
</template>
<script setup name="roomList">
import { columns } from './constants'
import GivePopularity from './components/givePopularity.vue'
import RoomForbidden from './components/roomForbidden.vue'
import { getListApi, unBanApi } from '@/api/room/room.js'
import { useConfirm } from '@/hooks/useConfirm.js'

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}
const resetList = () => {
  myProTableRef.value.reset()
}

// 解封房间弹窗
const unsealedRoom = (row) => {
  useConfirm({
    api: () => unBanApi({ id: row.roomId }),
    tip: '此操作不可退回，确定解封房间嘛？',
    message: '解封成功',
  }).then(() => {
    myProTableRef.value.reset()
  })
}

// 处理时间筛选参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.beginCreateTime = params.createTime?.[0] ?? ''
  newParams.endCreateTime = params.createTime?.[1] ?? ''
  delete newParams.createTime
  return getListApi(newParams)
}

// 赠送人气弹窗
const givePopularity = ref()
const setGivepopularityPage = (params) => {
  givePopularity.value.showDialog(params)
}

// 封禁房间弹窗
const roomForbidden = ref()
const setRoomForbidden = (params) => {
  roomForbidden.value.showDialog(params)
}
</script>
