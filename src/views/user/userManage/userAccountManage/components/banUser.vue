<template>
  <div>
    <MyDialog :model-value="visible" title="封禁用户" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="banUserFormRule">
        <el-form-item label="封禁原因" prop="frozenDes">
          <el-select v-model="form.frozenDes" class="m-2" placeholder="请选择">
            <el-option v-for="item in banOptions" :key="item.id" :label="item.typeName" :value="item.id" />
          </el-select>
          <!-- <el-cascader
            v-model="form.frozenDesArray"
            class="w-full"
            :options="banOptions"
            :props="props"
            @change="handleChange"
          /> -->
        </el-form-item>
        <el-form-item label="封禁时长" prop="frozenTimeType">
          <el-radio-group v-model="form.frozenTimeType" class="ml-4">
            <el-radio :label="0">按小时封禁</el-radio>
            <el-radio :label="1">按天封禁</el-radio>
            <el-radio :label="2">按月封禁</el-radio>
            <el-radio :label="3">永久</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.frozenTimeType !== 3" label=" " prop="frozenTime">
          <el-input-number v-model="form.frozenTime" :min="1" placeholder="请输入封禁时长" />
          <span v-if="form.frozenTimeType === 0" class="ml-1">小时</span>
          <span v-if="form.frozenTimeType === 1" class="ml-1">天</span>
          <span v-if="form.frozenTimeType === 2" class="ml-1">月</span>
        </el-form-item>
        <el-form-item label="封禁来源">
          <el-input v-model="form.frozenSource" placeholder="请输入封禁来源" />
        </el-form-item>
        <el-form-item label="封禁证据">
          <FileUpload :modelValue="form.urlsList" @queryFile="queryFile" />
        </el-form-item>
        <el-form-item label="封禁理由">
          <el-input
            v-model="form.des"
            type="textarea"
            maxlength="500"
            :show-word-limit="true"
            placeholder="请输入封禁理由，最多可输入500字"
          />
        </el-form-item>
        <el-form-item label="封禁实名认证关联账号">
          <el-radio-group v-model="form.banIdAuth" class="ml-4">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
          <!-- <router-link :to="{ path: '/user/userManage/userRealName', query: { certNo: certNo } }"></router-link> -->
          <el-button type="primary" class="ml-10" @click="lookRelevance">查看关联账号</el-button>
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { banUserApi, getUserAuthApi } from '@/api/user/manager.js'
import { getListAllApi } from '@/api/customer/config.js'
import { useToggle } from '@vueuse/core'
import { banUserTableForm, banUserFormRule } from '../constants'
import { useRouter } from 'vue-router'

const router = useRouter()
const emits = defineEmits(['queryBanType'])

const propsData = defineProps({
  userId: {
    type: String,
    required: true,
  },
})
const { proxy } = getCurrentInstance()

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(banUserTableForm())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || banUserTableForm())
  visible.value = true
}
// 提交form 表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    form.userId = +propsData.userId
    if (valid) {
      visible.value = false
      await banUserApi(form)
      proxy.$modal.msgSuccess(`封禁成功`)
      emits('queryBanType', 1)
    } else {
      console.log('error submit')
      return false
    }
  })
}

// 查看关联账号
const lookRelevance = async () => {
  const { data } = await getUserAuthApi({ ssId: propsData.userId })
  router.push({
    path: '/user/userManage/userRealName',
    query: { certNo: data.certNo },
  })
}

// const props = {
//   expandTrigger: 'hover',
// }

// const handleChange = (value) => {
//   form.frozenDes = value.toString()
// }

// 获取违规类型
const banOptions = ref()
const getViolation = async () => {
  const { data } = await getListAllApi()
  banOptions.value = data
}
getViolation()

const queryFile = (params) => {
  const newParams = params.split(',')
  if (newParams[0] === '') {
    form.urls = []
  } else {
    form.urls = newParams
  }
}

defineExpose({ showDialog })
</script>
