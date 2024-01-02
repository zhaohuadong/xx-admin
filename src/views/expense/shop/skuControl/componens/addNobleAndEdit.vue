<template>
  <div>
    <MyDialog :model-value="visibel" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto" mx-auto>
        <el-row>
          <el-col :span="12">
            <el-form-item label="选择类别:" prop="categoryId">
              <el-select
                v-model="form.categoryId"
                placeholder="请选择类别"
                :style="{ width: '244px' }"
                @change="handleChange"
              >
                <el-option v-for="item in formSelectOptions" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商品名称:" :style="{ marginLeft: '98px' }" prop="commodityName">
              <el-input
                v-model="form.commodityName"
                placeholder="请输入商品名称"
                :style="{ width: '244px' }"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-row v-for="(item, index) in form.skuList" :key="index">
              <el-col :span="8">
                <el-form-item label="天数">
                  <el-input
                    v-model="item.days"
                    :min="0"
                    type="number"
                    placeholder="请输入"
                    :disabled="item.days === -1"
                    :style="{ width: '127px', marginRight: '10px' }"
                  ></el-input>
                  <!-- <el-radio-group v-model="item.days" v-if="index === 0">
                    <el-radio :label="-1" size="large">永久</el-radio>
                  </el-radio-group> -->
                  <el-checkbox
                    v-if="index === 0"
                    v-model="item.days"
                    :true-label="-1"
                    :false-label="null"
                    label="永久"
                    size="large"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="价格">
                  <el-input
                    v-model="item.price"
                    type="number"
                    :min="0"
                    placeholder="请输入"
                    :style="{ width: '127px', marginRight: '10px' }"
                  ></el-input>
                  <!-- <el-checkbox-group v-model="item.free" size="small">
                    <el-checkbox label="免费" name="free" />
                  </el-checkbox-group> -->
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="折后价格">
                  <el-input
                    v-model="item.discountPrice"
                    :min="1"
                    type="number"
                    placeholder="请输入"
                    :style="{ width: '127px', marginRight: '10px' }"
                  ></el-input>
                  <el-button v-if="index === 0" type="primary" @click="addList">添加</el-button>
                  <el-button v-if="index !== 0" type="danger" @click="delList(index)">删除</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <el-row>
              <el-col v-if="form.categoryId === 2" :span="8">
                <el-form-item label="展示位置:" class="object-center" prop="position">
                  <el-radio-group v-model="form.position" class="ml-4">
                    <el-radio :label="1" size="large">公屏</el-radio>
                    <el-radio :label="2" size="large">全屏</el-radio>
                  </el-radio-group>
                  <div :style="{ color: 'red', margin: '-18px 7px' }">该设置只对坐骑有效</div>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="状态:" class="object-center">
                  <el-radio-group v-model="form.commodityState" class="ml-4">
                    <el-radio :label="0" size="large">下架</el-radio>
                    <el-radio :label="1" size="large">上架</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="排序:" :style="{ marginTop: '0' }">
                  <el-input-number
                    v-model="form.sortNum"
                    class="mx-4"
                    controls-position="right"
                    :style="{ width: '190px' }"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-form-item label="爵位等级:" prop="knighthoodLevel">
              <el-select v-model="form.knighthoodLevel" placeholder="请选择类别" :style="{ width: '244px' }">
                <el-option v-for="item in formOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col v-if="nameOption === 'ID特效' || nameOption === '入场特效'" :span="24">
            <el-row>
              <el-col :span="8">
                <el-form-item label="字体颜色:" prop="fontColor">
                  <el-input v-model="form.fontColor" placeholder="请输入字体颜色"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col>
            <el-form-item label="图片:" prop="previewUrl">
              <ImageUpload :modelValue="form.previewUrl" :limit="1" @queryImage="queryImage" />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item v-if="nameOption !== 'ID特效' && nameOption !== '入场特效'" label="效果图:" prop="dynamicUrl">
              <ImageUpload :modelValue="form.dynamicUrl" :limit="1" @queryImage="queryPic" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </MyDialog>
  </div>
</template>

<script setup>
import { addApi, editApi } from '@/api/expense/product.js'
import { getListApi } from '@/api/expense/shopCategory.js'

import { useToggle } from '@vueuse/core'
import { formNobleData, formRule, columns1 } from '../constants'
import { getListApi as getKnightApi } from '@/api/expense/knighthood.js'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const formOptions = ref([])
const formSelectOptions = ref()

const [visibel, toggle] = useToggle()
const formRef = ref()
const form = reactive(formNobleData())

// 获取类别列表
const getCategoryList = async function () {
  const { rows } = await getListApi()
  formSelectOptions.value = rows
  columns1[4].enum = rows.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
}
getCategoryList()

// 获取爵位等级列表
const gitKnightList = async () => {
  const { rows } = await getKnightApi()
  columns1[8].enum = rows.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
  formOptions.value = rows.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
}
gitKnightList()

// 添加按钮
const addList = () => {
  form.skuList.push({ days: null, price: null, discountPrice: null })
}
// 删除按钮
const delList = (index) => {
  form.skuList.splice(index, 1)
}
// 图片上传
const queryImage = (value) => {
  form.previewUrl = value
}
// 效果图上传
const queryPic = (value) => {
  form.dynamicUrl = value
}

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')

// 获取类别输入数据
const nameOption = ref()
const handleChange = (e) => {
  const newOptions = formSelectOptions.value.find((item) => {
    return item.id === e
  })
  nameOption.value = newOptions.name
}

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'
  Object.assign(form, params || formNobleData())
  if (params) {
    delete params.skuList
    form.skuList = params.skuListArray
    form.commodityState = params.commodityState
  }
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
.el-form-item__label {
  margin-top: 4px;
}
</style>
