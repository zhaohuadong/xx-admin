<template>
  <div>
    <MyDialog :model-value="visibel" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto" mx-auto>
        <el-row>
          <el-col :span="12">
            <el-form-item label="爵位名称:" prop="name">
              <el-input v-model="form.name" placeholder="请输入爵位名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="flex">
            <el-form-item label="开通价格:" prop="validDays" :style="{ minWidth: '195px' }">
              <el-input
                v-model="form.validDays"
                class="first"
                placeholder="有效天数"
                type="number"
                @input="integer($event, 'validDays')"
              >
                <template #suffix>天</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="openCoin">
              <el-input
                v-model="form.openCoin"
                placeholder="请输入数量"
                type="number"
                @input="integer($event, 'openCoin')"
              >
                <template #suffix>金币</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="flex">
            <el-form-item label="续费:" prop="renewDays" :style="{ minWidth: '195px' }">
              <el-input
                v-model="form.renewDays"
                class="first"
                placeholder="有效天数"
                type="number"
                @input="integer($event, 'renewDays')"
              >
                <template #suffix>天</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="renewCoin">
              <el-input
                v-model="form.renewCoin"
                placeholder="请输入数量"
                type="number"
                @input="integer($event, 'renewCoin')"
              >
                <template #suffix>金币</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="返利:" prop="rebateCoin">
              <el-input
                v-model="form.rebateCoin"
                placeholder="请输入数量"
                type="number"
                @input="integer($event, 'rebateCoin')"
              >
                <template #suffix>金币</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="进场人气:">
              <el-input v-model="form.givePopularity" placeholder="请输入人气数量" type="number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="经验加速:">
              <el-input
                v-model="form.experienceAccelerate"
                placeholder="请输入加速数量"
                type="number"
                @input="integer($event, 'experienceAccelerate')"
              >
                <template #suffix>%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="聊天字体颜色:">
              <el-input v-model="form.chatFontColor" placeholder="请输入颜色代码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="爵位说明:">
              <el-input v-model="form.remark" placeholder="请输入爵位说明"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="爵位图片:">
              <ImageUpload :modelValue="form.url" :limit="1" @queryImage="queryImage" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="爵位勋章:">
              <ImageUpload :modelValue="form.medalUrl" :limit="1" @queryImage="queryImageMedal" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="赠送个性商品ID:" prop="giveGoods">
              <el-input v-model="form.giveGoods" placeholder="请输入商品ID，多个用“ ; ”隔开"></el-input>
              <div :style="{ color: 'red' }">多个商品用英文分号隔开</div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="爵位权限:">
              <el-checkbox-group v-model="form.powerIds">
                <el-checkbox
                  v-for="(item, index) in formCheckboxList.value"
                  :key="index"
                  :label="item.powerId"
                  size="large"
                >
                  {{ item.powerName }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="爵位等级:" prop="knighthoodLevel">
              <el-input v-model.number="form.knighthoodLevel" type="number" placeholder="请输入爵位等级"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </MyDialog>
  </div>
</template>

<script setup>
import { addApi, editApi } from '@/api/expense/knighthood.js'
import { getListApi } from '@/api/expense/knighthoodPower.js'
import { formData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visibel, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 获取爵位权限
const formCheckboxList = reactive([])
;(async function () {
  const { rows } = await getListApi()
  formCheckboxList.value = rows
})()

// 输入框整数限制
const integer = (value, text) => {
  value = value.replace(/^(0+)|[^\d]+/g, '')
  form[text] = value
}

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')

// 获取图片上传链接
const queryImage = (params) => {
  form.url = params
}
// 获取爵位图片
const queryImageMedal = (params) => {
  form.medalUrl = params
}

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑爵位' : '新增爵位'
  Object.assign(form, params || formData())
  if (params) form.powerIds = params.powerIdList

  visibel.value = true
}
const submit = () => {
  console.log(form)
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
        proxy.resetForm(formRef.value)
      } else {
        await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
      }
      emits('queryTable', { pageNum: 1 })
      visibel.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
<style lang="scss">
.flex {
  display: flex;
  .first {
    margin-right: 10px;
  }
}
.el-checkbox {
  margin-right: 20px;
}
</style>
