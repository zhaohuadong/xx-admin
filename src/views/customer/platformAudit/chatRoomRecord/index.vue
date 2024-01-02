<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :dataCallback="dataCallback">
      <template #messageContent="{ row }">
        <!-- {{ typeof row.id }} -->
        <span v-if="row.id === 22">
          <el-image
            class="w-10 h-10"
            src="/src/assets/images/login/loginBack.png"
            :preview-src-list="['/src/assets/images/login/loginBack.png']"
            fit="fill"
            :preview-teleported="true"
          />
        </span>
        <span v-else-if="row.id === 25">
          <audio
            style="width: 220px; height: 30px"
            :src="row.messageContent"
            controls
            controlslist="noplaybackrate nodownload"
            disablePictureInPicture
          ></audio>
        </span>
        <span v-else>{{ row.messageContent }}</span>
      </template>
    </MyProTable>
  </div>
</template>
<script setup name="ChatRoomRecord">
import { columns } from './constants'
import { getListApi } from '@/api/customer/chat.js'

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    item.status = `${item.status}`
    return item
  })
  return result
}

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.beginTime = newParams.sendTime?.[0] ?? ''
  newParams.endTime = newParams.sendTime?.[1] ?? ''
  delete newParams.sendTime
  return getListApi(newParams)
}
</script>
