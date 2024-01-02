<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-row :gutter="10" class="!ml-0 !mr-0">
      <el-col
        v-for="(item, index) in editGiftList"
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
              :src="item.imgUrl"
              :preview-src-list="[item.imgUrl]"
              fit="fill"
              :preview-teleported="true"
            ></el-image>
            <div v-tooltipAutoShow class="text-base text-center truncate w-full mt-2 mb-2">
              <el-tooltip class="box-item" effect="light" placement="top-start">
                {{ item.giftName }}
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
// import { oneEdit, getListApi } from '@/api/activity/prize.js'
import { useToggle } from '@vueuse/core'
import { getCurrentInstance, ref } from 'vue'
// import { formData } from '../../../activity/taskManage/taskList/constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
const props = defineProps({
  getListApi: {
    type: Function,
    required: true,
  },
  oneEdit: {
    type: Function,
    required: true,
  },
  typeName: {
    type: String,
    default: 'type',
  },
  url: {
    type: String,
    default: 'url',
  },
  name: {
    type: String,
    default: 'giftName',
  },
  otherName: {
    type: String,
    default: undefined,
  },
  number: {
    type: String,
    default: 'number',
  },
  list: {
    type: Boolean,
    default: false,
  },
})

const [visible, toggle] = useToggle()
const titleName = ref('')

const editGiftList = ref([])
const formList = reactive({})
// 弹窗打开
const showDialog = (params, sum) => {
  // 获取礼物数据
  ;(async function () {
    const { rows } = await props.getListApi({ [props.typeName]: params, [props.otherName]: sum })
    editGiftList.value = rows.map((item) => {
      return {
        imgUrl: item[props.url],
        giftName: item[props.name],
        stockNumber: item[props.number],
        id: item.id,
      }
    })
  })()
  titleName.value = '一键编辑'
  // Object.assign(form, params || formData())
  // formList.typeName = +params
  formList[props.typeName] = params
  formList[props.otherName] = sum

  visible.value = true
}
const submit = async () => {
  formList.list = editGiftList.value.map((item) => {
    return {
      id: item.id,
      [props.number]: item.stockNumber,
    }
  })
  if (props.list) {
    await props.oneEdit(formList)
  } else {
    await props.oneEdit(formList.list)
  }
  proxy.$modal.msgSuccess(`修改成功`)
  emits('queryTable', { pageNum: 1 })
  visible.value = false
}
defineExpose({ showDialog })
</script>
