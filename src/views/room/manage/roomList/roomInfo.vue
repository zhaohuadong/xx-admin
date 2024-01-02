<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <MyReturn :modelValue="{ name: 'RoomList' }"></MyReturn>
      </div>
    </el-card>
    <el-card class="!overflow-auto">
      <el-descriptions class="mt-2 w-full" :column="2" size="default" :border="true">
        <el-descriptions-item>
          <template #label>
            <div class="w-20">房间名称</div>
          </template>
          {{ form.roomTitle }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">房间号</div>
          </template>
          {{ form.roomId }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">房间密码</div>
          </template>
          {{ form.roomPwd }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">房间欢迎语</div>
          </template>
          {{ form.welcomeMsg }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">话题主题</div>
          </template>
          {{ form.roomTopicTitle }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">话题内容</div>
          </template>
          {{ form.roomTopic }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div class="cell-item">房间类别</div>
          </template>
          {{ form.roomCategory }}
          <!-- <p v-if="form.roomCategoryType === 1"></p>
          <p v-else>暂无</p> -->
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">房型类型</div>
          </template>
          {{ form.showType === 'common' ? '普通房型' : '电台房型' }}
          <!-- <p v-if="form.roomCategoryType === 2"></p>
          <p v-else>暂无</p> -->
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">房间标签</div>
          </template>
          {{ form.roomTag }}
        </el-descriptions-item>
        <!-- <el-descriptions-item>
          <template #label>
            <div class="cell-item">房间音效</div>
          </template>
          暂无
        </el-descriptions-item> -->

        <el-descriptions-item>
          <template #label>
            <div class="cell-item">封面图</div>
          </template>
          <div class="flex flex-wrap">
            <el-image
              class="w-20 h-20 m-1"
              :src="form.roomCover"
              hide-on-click-modal
              :preview-src-list="[form.roomCover]"
            ></el-image>
          </div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">设置老板麦</div>
          </template>
          {{ form.bossMicrophone === 0 ? '隐藏' : '显示' }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">背景图</div>
          </template>
          <el-image
            class="w-20 h-20 m-1"
            :src="form.roomBackground"
            :preview-src-list="[form.roomBackground]"
            hide-on-click-modal
          ></el-image>
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div class="cell-item">状态</div>
          </template>
          {{ form.state === 0 ? '隐藏' : '显示' }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">房主模式</div>
          </template>
          {{ form.roomOwnerModel === 0 ? '无权限' : '' }}
          {{ form.roomOwnerModel === 1 ? '开启' : '' }}
          {{ form.roomOwnerModel === 2 ? '关闭' : '' }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>
<script setup name="RoomInfo">
import { useRoute } from 'vue-router'
import { getRoomInfoApi } from '@/api/room/room.js'
const route = useRoute()
const form = ref({})
async function gitList() {
  const { data } = await getRoomInfoApi({ id: route.query.id })
  form.value = data
}
gitList()
</script>
<style lang="scss" scoped>
:deep(.is-bordered-label) {
  width: 200px !important;
}
:deep(.is-bordered-content) {
  max-width: 200px !important;
}
</style>
