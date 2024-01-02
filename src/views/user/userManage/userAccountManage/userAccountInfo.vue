<template>
  <div class="app-container !overflow-auto">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <div v-if="!pageType" class="flex items-center justify-between w-full mb-3.5">用户账号详情</div>
        <div v-else class="flex items-center justify-between w-full mb-3.5">编辑</div>
        <MyReturn :modelValue="{ name: 'UserAccountManage' }"></MyReturn>
      </div>
    </el-card>
    <div class="formAccountInfo">
      <el-form ref="formRef" label-width="auto" :model="form" :rules="editFormRule" class="w-full">
        <el-card header="基本信息">
          <el-row :gutter="24" class="h-20 !flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item label="头像">
                <div v-if="form.profilePath" class="flex items-end">
                  <!-- <el-image
                    class="w-20 h-20 m-1"
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.qfpktgG_X_qVhHhKRp50AQHaE1?pid=ImgDet&rs=1"
                    :preview-src-list="[
                      'https://tse4-mm.cn.bing.net/th/id/OIP-C.qfpktgG_X_qVhHhKRp50AQHaE1?pid=ImgDet&rs=1',
                    ]"
                  ></el-image> -->
                  <ImageUpload
                    :modelValue="form.profilePath"
                    :limit="1"
                    :isShowTip="false"
                    @queryImage="queryImageUser"
                  />
                </div>
                <div v-else>暂未上传</div>
                <el-button
                  v-if="form.profilePath && pageType"
                  type="danger"
                  size="small"
                  class="ml-10"
                  @click="delProfilePath"
                >
                  删除
                </el-button>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-form-item label="职业">
                <el-select v-model="form.job" placeholder="请选择职业" class="w-full">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="h-20 !flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item label="用户编号">{{ form.userCode }}</el-form-item>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-form-item label="城市">
                <el-cascader v-model="form.cityAll" class="w-full" :options="cityOptions" :props="props" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="24" class="h-20 !flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item label="用户昵称" prop="nickname">
                <div class="w-full flex flex-nowrap items-center">
                  <el-input v-model="form.nickname" type="text" placeholder="请输入用户昵称" class="!w-10/12" />
                  <el-button
                    v-if="form.nickname && pageType"
                    type="danger"
                    size="small"
                    class="ml-10"
                    @click="delNickName"
                  >
                    删除
                  </el-button>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-form-item label="支付宝账号">
                {{ form.alipayAccounts?.[0].alipayAccount }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="h-20 !flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="form.sex" class="ml-4">
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="0">女</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-form-item label="注册时间">
                {{ form.registerDate }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="10" :offset="1">
              <el-form-item label="生日">
                <el-date-picker
                  v-model="form.birthday"
                  value-format="YYYY-MM-DD"
                  type="date"
                  placeholder="请选择日期"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <!-- 用户实名信息 -->
        <el-card header="用户实名信息">
          <el-row v-if="form.realName || form.certNo" :gutter="24" class="h-20 !flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item label="真实姓名">{{ form.realName }}</el-form-item>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-form-item label="身份证号">{{ form.certNo }}</el-form-item>
            </el-col>
          </el-row>
          <el-row v-else :gutter="24" class="h-20 !flex items-center">
            <el-col :span="12" :offset="1">
              <el-form-item label="未进行实名认证"></el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <!-- 用户资料 -->
        <el-card header="用户资料">
          <el-row :gutter="24" class="h-20 !flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item v-if="infoType" label="个性签名">
                <div class="w-full flex flex-nowrap items-center">
                  <el-input v-model="form.info" type="text" placeholder="请输入个性签名" class="!w-10/12" />
                  <el-button v-if="form.info && pageType" type="danger" size="small" class="ml-10" @click="delInfo">
                    删除
                  </el-button>
                </div>
              </el-form-item>
              <el-form-item v-else label="已撤销"></el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="h-20 !flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item label="语音标签">
                <div v-if="form.audioInfo" class="w-full flex flex-nowrap items-center">
                  <audio
                    :src="form.audioInfo"
                    controls
                    controlslist="noplaybackrate nodownload"
                    disablePictureInPicture
                  ></audio>
                  <el-button
                    v-if="form.audioInfo && pageType"
                    type="danger"
                    size="small"
                    class="ml-10"
                    @click="delAudioInfo"
                  >
                    删除
                  </el-button>
                </div>
                <div v-else>暂未上传</div>
              </el-form-item>
              <!-- <el-form-item v-else label="暂未上传"> </el-form-item> -->
            </el-col>
            <el-col :span="10" :offset="1">
              <el-form-item label="交友标签">
                <el-select
                  v-model="userLabelList"
                  multiple
                  filterable
                  placeholder="请选择交友标签"
                  class="w-full"
                  @change="handleUserTable"
                >
                  <el-option v-for="item in tagOptions" :key="item.id" :label="item.labelName" :value="item.id" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="!flex items-center">
            <el-col :span="10" :offset="1">
              <el-form-item label="照片墙">
                <div v-if="form.imgUrls?.[0]" class="img">
                  <!-- w-28 h-28 m-1 mr-4 relative -->
                  <!-- <el-image
                    class="w-28 h-28"
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.qfpktgG_X_qVhHhKRp50AQHaE1?pid=ImgDet&rs=1"
                    :preview-src-list="[
                      'https://tse4-mm.cn.bing.net/th/id/OIP-C.qfpktgG_X_qVhHhKRp50AQHaE1?pid=ImgDet&rs=1',
                    ]"
                  ></el-image> -->
                  <ImageUpload :modelValue="form.imgUrls" :limit="9" :isShowTip="false" @queryImage="queryImagePhoto" />
                  <!-- <div
                    class="w-4 h-4 absolute top-0 right-0 bg-red-600 flex items-center justify-center cursor-pointer text-white"
                  >
                    x
                  </div> -->
                </div>
                <div v-else>暂未上传</div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-card header="相关数据">
          <el-row :gutter="24" class="!flex">
            <el-col :span="10" :offset="1">
              <el-descriptions direction="horizontal" :column="1" :border="true">
                <el-descriptions-item label="会员等级" width="5">{{ form.vip }}</el-descriptions-item>
                <el-descriptions-item label="爵位">{{ form.knightName }}</el-descriptions-item>
                <el-descriptions-item label="金币">{{ form.coin }}</el-descriptions-item>
                <el-descriptions-item label="钻石">{{ form.charmNum }}</el-descriptions-item>
                <!-- <el-descriptions-item label="所属公会"></el-descriptions-item> -->
              </el-descriptions>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-descriptions direction="horizontal" :column="1" :border="true">
                <el-descriptions-item label="邀请码">{{ form.invitationCode }}</el-descriptions-item>
                <el-descriptions-item label="虾米">{{ form.integralNum }}</el-descriptions-item>
                <el-descriptions-item label="剩余普通钩子数量">{{ form.primaryLotteryProp }}</el-descriptions-item>
                <el-descriptions-item label="剩余高级钩子数量">{{ form.seniorLotteryProp }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-card>
      </el-form>
      <!-- 编辑确定 -->
      <div class="foot">
        <el-row v-if="pageType" :gutter="24" class="!flex items-center">
          <!-- <el-divider /> -->
          <el-col :span="22" :offset="1">
            <div class="w-full flex justify-center">
              <el-button @click="cancleSubmit">取消</el-button>
              <el-button type="primary" @click="submit">提交</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script setup name="UserAccountInfo">
import { getUserDetailApi, editDetailApi } from '@/api/user/manager.js'
import { evilFn } from '@/utils/common.js'
import { editFormData, editFormRule } from './constants'
import { useRoute } from 'vue-router'
import cityOptions from './city'
const route = useRoute() // 获取路由参数
const pageType = ref(false) // true 编辑界面，false 详情界面
pageType.value = evilFn(route.query.type)
const { proxy } = getCurrentInstance()
const form = reactive(editFormData())
const formRef = ref()
const infoType = ref(true) // 个性签显示撤销
const emits = defineEmits(['queryTable'])
// 获取表单数据
const gitFormData = async () => {
  const { data } = await getUserDetailApi({ id: route.query.id })
  form.cityAll = [data.location, data.city]
  tagOptions.value = data.userLabels
  userLabelList.value = data.userLabels.map((item) => {
    return item.id
  })
  Object.assign(form, data)
}
// 获取交友标签
const tagOptions = ref()
const userLabelList = ref()
// 选择交友标签
const handleUserTable = (params) => {
  form.tagIds = params
  console.log(params)
}

onBeforeMount(async () => {
  gitFormData()
})

// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    // 处理tagIds查询参数
    if (Object.keys(form.tags).length > 0) {
      const newTags = JSON.parse(JSON.stringify(form.tags))
      const tagsOne = form.tags[0].tagId
      newTags.splice(0, 1)
      form.tagIds = [tagsOne, ...newTags]
    }
    // 处理城市两级选择
    form.location = form.cityAll[0]
    form.city = form.cityAll[1]
    delete form.cityAll
    if (valid) {
      await editDetailApi(form)
      proxy.$modal.msgSuccess(`编辑成功`)
      gitFormData()
      emits('queryTable')
    } else {
      console.log('error submit')
      return false
    }
  })
}
// 取消表单
const cancleSubmit = () => {
  proxy.resetForm(formRef.value)
}

const props = {
  expandTrigger: 'hover',
}

// 获取头像上传链接
const queryImageUser = (params) => {
  form.profilePath = params
}

// 获取照片墙上传链接
const queryImagePhoto = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  if (newParams.length > 0) form.photoWallPaths = newParams.split(',')
  form.deletedPhotoWall = true
}

// 设置默认头像
const delProfilePath = () => {
  form.profilePath = 'https://tse4-mm.cn.bing.net/th/id/OIP-C.qfpktgG_X_qVhHhKRp50AQHaE1?pid=ImgDet&rs=1'
  form.deletedProfile = true
}

// 设置默认昵称
const delNickName = () => {
  form.nickname = '默认随机昵称'
  form.deletedNickName = true
}

// 撤销个性签名
const delInfo = () => {
  infoType.value = false
  form.info = ''
  form.deletedInfo = true
}

// 撤销语音签名
const delAudioInfo = () => {
  form.audioInfo = ''
  form.deletedAudioInfo = true
}
</script>
<style lang="scss" scoped>
:deep(.el-form-item) {
  margin-bottom: 0;
}
.el-form {
  .el-card {
    margin-bottom: 5px;
  }
}
.formAccountInfo {
  padding-bottom: 30px;
}
.foot {
  margin-top: 30px;
}
</style>
