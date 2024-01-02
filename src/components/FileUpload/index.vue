<template>
  <div class="upload-file w-full">
    <el-upload
      ref="fileUpload"
      multiple
      action=""
      :limit="limit"
      :show-file-list="true"
      :file-list="fileList"
      :before-remove="handleDelete"
      :on-exceed="handleExceed"
      :on-change="setFileUpload"
      :auto-upload="false"
      :accept="accept"
    >
      <!-- 上传按钮 -->
      <el-button type="primary" :loading="loading">选取文件</el-button>
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
  </div>
</template>

<script setup>
import { addSysObsUpload } from '@/api/common'
const props = defineProps({
  modelValue: [String, Object, Array],
  // 数量限制
  limit: {
    type: Number,
    default: 5,
  },
  // 大小限制(MB)
  fileSize: {
    type: Number,
    // default: 5,
  },
  // 文件类型, 例如['png', 'jpg', 'jpeg']
  fileType: {
    type: Array,
    // default: () => ['doc', 'xls', 'xlsx', 'ppt', 'txt', 'pdf'],
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
const fileList = ref([])
const showTip = computed(() => props.isShowTip && (props.fileType || props.fileSize))
const accept = ref('')

const loading = ref(false)

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
        accept.value = accept.value + '.' + item + ','
      })
      accept.value = accept.value.slice(0, accept.value.length - 1)
    } else {
      accept.value = ''
    }
  },
  { deep: true, immediate: true }
)

// 文件个数超出
const handleExceed = () => {
  proxy.$modal.msgError(`上传文件数量不能超过 ${props.limit} 个!`)
}

// 文件上传回调
const setFileUpload = (file) => {
  loading.value = true
  if (props.fileSize) {
    const isLt = file.size / 1024 / 1024 < props.fileSize
    if (!isLt) {
      proxy.$modal.msgError(`上传文件大小不能超过 ${props.fileSize} MB!`)
      return false
    }
  }
  const data = new FormData()
  data.append('file', file.raw)

  addSysObsUpload(data).then((res) => {
    if (res.code === '200') {
      uploadList.value.push({ name: res.msg, url: res.msg })
      loading.value = false
      proxy.$modal.msgSuccess('上传成功')
      uploadedSuccessfully()
    } else {
      proxy.$modal.closeLoading()
      loading.value = false
      proxy.$modal.msgError('上传失败')
      proxy.$refs.fileUpload.handleRemove(file)
      uploadedSuccessfully()
    }
  })
}

// 删除文件
const handleDelete = (file) => {
  const findex = fileList.value.map((f) => f.name).indexOf(file.name)
  if (findex > -1) {
    fileList.value.splice(findex, 1)
    emit('queryFile', listToString(fileList.value))
    if (!fileList.value.length) {
      loading.value = false
    }
    return false
  }
}

// 上传结束处理
const uploadedSuccessfully = () => {
  fileList.value = fileList.value.filter((f) => f.url !== undefined).concat(uploadList.value)
  uploadList.value = []
  emit('queryFile', listToString(fileList.value))
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
.upload-file-uploader {
  margin-bottom: 5px;
}
.upload-file-list .el-upload-list__item {
  border: 1px solid #e4e7ed;
  line-height: 2;
  margin-bottom: 10px;
  position: relative;
}
.upload-file-list .ele-upload-list__item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
}
.ele-upload-list__item-content-action .el-link {
  margin-right: 10px;
}
</style>
