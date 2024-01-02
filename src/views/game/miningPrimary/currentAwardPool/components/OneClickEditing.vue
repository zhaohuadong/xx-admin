<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-row :gutter="10" class="!ml-0 !mr-0">
      <el-col
        v-for="(item, index) in editGiftList.value"
        :key="index"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="6"
        class="mb-2"
      >
        <el-card shadow="always">
          <div class="flex flex-col items-center justify-center mb-2">
            <el-image
              class="w-24 h-24"
              :src="item.url"
              :preview-src-list="[item.url]"
              fit="fill"
              :preview-teleported="true"
            ></el-image>
            <div v-tooltipAutoShow class="text-base text-center truncate w-full mt-2 mb-2">
              <el-tooltip class="box-item" effect="light" placement="top-start">
                {{ item.giftName }}
              </el-tooltip>
            </div>
            <el-input-number v-model="item.number" :min="1" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </MyDialog>
</template>

<script setup name="OneClickEditing">
import { oneEdit, getListApi } from '@/api/game/currentAwardPool.js'
import { useToggle } from '@vueuse/core'
import { getCurrentInstance, ref } from 'vue'
// import { formData } from '../../../activity/taskManage/taskList/constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const props = defineProps({
  nextConfigId: {
    type: Number,
    default: null,
  },
})

const [visible, toggle] = useToggle()
const titleName = ref('')

const editGiftList = reactive([])
const formList = reactive({})
// 弹窗打开
const showDialog = (params) => {
  // 获取下期礼物数据
  if (props.nextConfigId) {
    ;(async function () {
      const { data } = await getListApi({ type: params, nextConfigId: props.nextConfigId })
      editGiftList.value = data
    })()
  } else {
    // 获取礼物数据
    ;(async function () {
      const { data } = await getListApi({ type: params })
      editGiftList.value = data
    })()
  }
  titleName.value = '一键编辑'
  // Object.assign(form, params || formData())
  formList.type = +params
  visible.value = true
}
const submit = async () => {
  formList.list = editGiftList.value.map((item) => {
    return {
      id: item.id,
      number: item.number,
    }
  })
  await oneEdit(formList)
  proxy.$modal.msgSuccess(`修改成功`)
  emits('queryTable', { pageNum: 1 })
  visible.value = false
}
defineExpose({ showDialog })
</script>
