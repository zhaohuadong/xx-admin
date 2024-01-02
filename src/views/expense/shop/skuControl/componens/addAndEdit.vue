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
                <el-option v-for="item in formOptions" :key="item.id" :label="item.name" :value="item.id" />
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
                    :disabled="item.days === -1"
                    type="number"
                    placeholder="请输入"
                    :min="0"
                    :style="{ width: '127px', marginRight: '10px' }"
                  ></el-input>

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
                  <el-input
                    v-model="form.sortNum"
                    class="mx-4"
                    :min="0"
                    type="number"
                    placeholder="请输入商品排序"
                    :style="{ width: '190px' }"
                  />
                </el-form-item>
              </el-col>
            </el-row>
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
import { formData, formRule, columns } from '../constants'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const formOptions = ref()

const [visibel, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 获取类别列表
const getCategoryList = async function () {
  const { rows } = await getListApi()
  formOptions.value = rows
  // store.setShopCategoryType(false)
  columns[4].enum = rows.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
}
getCategoryList()
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

// 获取类别输入数据
const nameOption = ref()
const handleChange = (e) => {
  const newOptions = formOptions.value.find((item) => {
    return item.id === e
  })
  nameOption.value = newOptions.name
}

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'

  Object.assign(form, params || formData())
  if (params) {
    delete params.skuList
    form.skuList = params.skuListArray
    form.commodityState = params.commodityState
  }
  console.log(form)
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
