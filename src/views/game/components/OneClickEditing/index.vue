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
              :src="item.prizePicture"
              :preview-src-list="[item.prizePicture]"
              fit="fill"
              :preview-teleported="true"
            ></el-image>
            <div v-tooltipAutoShow class="text-base text-center truncate w-full mt-2 mb-2">
              <el-tooltip class="box-item" effect="light" placement="top-start">
                {{ item.prizeTitle }}
              </el-tooltip>
            </div>
            <el-input-number v-model="item.stockNumber" :min="1" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </MyDialog>
</template>

<script setup name="OneClickEditing">
import { oneEdit, getListApi } from '@/api/activity/prize.js'
import { useToggle } from '@vueuse/core'
import { getCurrentInstance, ref } from 'vue'
// import { formData } from '../../../activity/taskManage/taskList/constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const titleName = ref('')
// const editGiftList = ref([
//   {
//     name: '礼物名礼物名礼物xdadasf',
//     count: 4534,
//     url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d32468915e81babf3ecec14c7119340?rik=fm%2b1k5n%2fwght1Q&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f08%2fsjs_9-768x583.jpg&ehk=RhrpNGMsTVEX5Ij%2bQ5VphDAsNFSQnsufubQHkXyqvRs%3d&risl=&pid=ImgRaw&r=0',
//   },
//   {
//     name: '111',
//     count: 4534,
//     url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d32468915e81babf3ecec14c7119340?rik=fm%2b1k5n%2fwght1Q&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f08%2fsjs_9-768x583.jpg&ehk=RhrpNGMsTVEX5Ij%2bQ5VphDAsNFSQnsufubQHkXyqvRs%3d&risl=&pid=ImgRaw&r=0',
//   },
//   {
//     name: '111',
//     count: 4534,
//     url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d32468915e81babf3ecec14c7119340?rik=fm%2b1k5n%2fwght1Q&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f08%2fsjs_9-768x583.jpg&ehk=RhrpNGMsTVEX5Ij%2bQ5VphDAsNFSQnsufubQHkXyqvRs%3d&risl=&pid=ImgRaw&r=0',
//   },
//   {
//     name: '111',
//     count: 4534,
//     url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d32468915e81babf3ecec14c7119340?rik=fm%2b1k5n%2fwght1Q&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f08%2fsjs_9-768x583.jpg&ehk=RhrpNGMsTVEX5Ij%2bQ5VphDAsNFSQnsufubQHkXyqvRs%3d&risl=&pid=ImgRaw&r=0',
//   },
//   {
//     name: '111',
//     count: 4534,
//     url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d32468915e81babf3ecec14c7119340?rik=fm%2b1k5n%2fwght1Q&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f08%2fsjs_9-768x583.jpg&ehk=RhrpNGMsTVEX5Ij%2bQ5VphDAsNFSQnsufubQHkXyqvRs%3d&risl=&pid=ImgRaw&r=0',
//   },
//   {
//     name: '111',
//     count: 4534,
//     url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d32468915e81babf3ecec14c7119340?rik=fm%2b1k5n%2fwght1Q&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f08%2fsjs_9-768x583.jpg&ehk=RhrpNGMsTVEX5Ij%2bQ5VphDAsNFSQnsufubQHkXyqvRs%3d&risl=&pid=ImgRaw&r=0',
//   },
// ])
const editGiftList = reactive([])
const formList = reactive({})
// 弹窗打开
const showDialog = (params) => {
  // 获取礼物数据
  ;(async function () {
    const { data } = await getListApi({ jackpotType: params })
    editGiftList.value = data
  })()
  titleName.value = '一键编辑'
  // Object.assign(form, params || formData())
  formList.jackpotType = +params
  visible.value = true
}
const submit = async () => {
  formList.list = editGiftList.value.map((item) => {
    return {
      id: item.id,
      stockNumber: item.stockNumber,
    }
  })
  await oneEdit(formList)
  proxy.$modal.msgSuccess(`修改成功`)
  emits('queryTable', { pageNum: 1 })
  visible.value = false
}
defineExpose({ showDialog })
</script>
