<template>
  <div class="component-upload-image">
    <el-upload
      ref="imageUpload"
      multiple
      action=""
      list-type="picture-card"
      :limit="limit"
      :before-remove="handleDelete"
      :show-file-list="true"
      :file-list="fileList"
      :on-preview="handlePictureCardPreview"
      :class="{ hide: fileList.length >= limit }"
      :on-change="setImgUpload"
      :auto-upload="false"
      :accept="accept"
    >
      <el-icon class="avatar-uploader-icon"><icon-ep-plus /></el-icon>
    </el-upload>
    <!-- 上传提示 -->
    <div v-if="showTip" class="el-upload__tip">
      请上传
      <template v-if="fileSize">
        大小不超过
        <b style="color: #f56c6c">{{ fileSize }}MB</b>
      </template>
      <template v-if="fileType">
        格式为
        <b style="color: #f56c6c">{{ fileType.join('/') }}</b>
      </template>
      的文件
    </div>

    <el-dialog v-model="dialogVisible" title="预览" width="800px" append-to-body>
      <img :src="dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto" />
    </el-dialog>
  </div>
</template>

<script setup>
import { addSysObsUpload } from '@/api/common'
const props = defineProps({
  modelValue: [String, Object, Array],
  // 图片数量限制
  limit: {
    type: Number,
    default: 5,
  },
  // 大小限制(MB)
  fileSize: {
    type: Number,
    // default: 1,
  },
  // 文件类型, 例如['png', 'jpg', 'jpeg']
  fileType: {
    type: Array,
    // default: () => ['png', 'jpg', 'jpeg', 'gif', 'bmp'],
  },
  // 是否显示提示
  isShowTip: {
    type: Boolean,
    default: false,
  },
})

const { proxy } = getCurrentInstance()
const emit = defineEmits()
const uploadList = ref([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const fileList = ref([])
const showTip = computed(() => props.isShowTip && (props.fileType || props.fileSize))
const accept = ref('')

watch(
  () => props.modelValue,
  (val) => {
    // console.log(val)
    if (val) {
      // 首先将值转为数组
      const list = Array.isArray(val) ? val : props.modelValue.split(',')
      // 然后将数组转为对象数组
      fileList.value = list.map((item) => {
        if (typeof item === 'string') {
          item = { name: item, url: item }
        }
        return item
      })
    } else {
      fileList.value = []
      return []
    }
  },
  { deep: true, immediate: true }
)
watch(
  () => props.fileType,
  (val) => {
    if (val) {
      const list = val
      list.forEach((item) => {
        accept.value = accept.value + 'image/' + item + ','
      })
      accept.value = accept.value.slice(0, accept.value.length - 1)
    } else {
      accept.value = 'image/jpeg,image/jpg,image/gif,image/png,image/bmp'
    }
  },
  { deep: true, immediate: true }
)

// 上传回调
const setImgUpload = (file) => {
  if (props.fileSize) {
    const isLt = file.size / 1024 / 1024 < props.fileSize
    if (!isLt) {
      proxy.$modal.msgError(`上传头像图片大小不能超过 ${props.fileSize} MB!`)
      return false
    }
  }
  const data = new FormData()
  data.append('file', file.raw)

  addSysObsUpload(data).then((res) => {
    if (res.code === '200') {
      uploadList.value.push({ name: res.msg, url: res.msg })
      proxy.$modal.msgSuccess('上传成功')
      uploadedSuccessfully()
    } else {
      proxy.$modal.closeLoading()
      proxy.$modal.msgError('上传失败')
      proxy.$refs.imageUpload.handleRemove(file)
      uploadedSuccessfully()
    }
  })
}

// 删除图片
const handleDelete = (file) => {
  const findex = fileList.value.map((f) => f.name).indexOf(file.name)
  if (findex > -1) {
    fileList.value.splice(findex, 1)
    emit('queryImage', listToString(fileList.value))
    return false
  }
}

// 上传结束处理
const uploadedSuccessfully = () => {
  fileList.value = fileList.value.filter((f) => f.url !== undefined).concat(uploadList.value)
  uploadList.value = []
  emit('queryImage', listToString(fileList.value))
  // proxy.$modal.closeLoading()
}

// 预览
const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

// 对象转成指定字符串分隔
const listToString = (list, separator) => {
  let strs = ''
  separator = separator || ','
  for (const i in list) {
    if (list[i].url) {
      strs += list[i].url + separator
    }
  }

  return strs !== '' ? strs.substr(0, strs.length - 1) : ''
}
</script>

<style scoped lang="scss">
// .el-upload--picture-card 控制加号部分
:deep(.hide .el-upload--picture-card) {
  display: none;
}
</style>
