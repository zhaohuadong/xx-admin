<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- input -->
      <el-form-item label="礼包名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入礼包名称" />
      </el-form-item>
      <el-form-item v-for="(item, index) in form.gold" :key="index" :label="'金币'">
        <el-input v-model.number="item.number" placeholder="请输入金币数量">
          <template #suffix>金币</template>
        </el-input>
      </el-form-item>
      <el-form-item v-if="!isEdit" label="虾米币">
        <el-input v-model.number="form.peeled.number" placeholder="条件值" />
      </el-form-item>

      <!-- 新增礼物 -->

      <el-form-item v-for="(domain, index) in form.gift" :key="index" :label="'礼物'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择礼物">
            <el-option v-for="item in giftList" :key="item.giftId" :value="item.giftId" :label="item.giftName" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="数量">
            <template #suffix>个</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeDomain(domain)">删除</el-button>
        </el-space>
      </el-form-item>

      <!-- 新增头像框 -->
      <el-form-item v-for="(domain, index) in form.headFrame" :key="index" :label="'头像框'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择头像框">
            <el-option v-for="item in headFrameList" :key="item.id" :value="item.id" :label="item.title" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeHeadFrame(domain)">删除</el-button>
        </el-space>
      </el-form-item>

      <!-- 新增坐驾 -->

      <el-form-item v-for="(domain, index) in form.car" :key="index" :label="'坐驾'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择坐驾">
            <el-option v-for="item in carList" :key="item.id" :value="item.id" :label="item.title" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeCar(domain)">删除</el-button>
        </el-space>
      </el-form-item>

      <!-- 新增麦位光波-->
      <el-form-item v-for="(domain, index) in form.light" :key="index" :label="'麦位光波'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择麦位光波">
            <el-option v-for="item in lightList" :key="item.id" :value="item.id" :label="item.title" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeLight(domain)">删除</el-button>
        </el-space>
      </el-form-item>

      <!-- 新增聊天气泡 -->

      <el-form-item v-for="(domain, index) in form.chat" :key="index" :label="'聊天气泡'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择聊天气泡">
            <el-option v-for="item in chatList" :key="item.id" :value="item.id" :label="item.title" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeChat(domain)">删除</el-button>
        </el-space>
      </el-form-item>

      <!-- 新增称号 -->
      <!-- <el-form-item v-for="domain in form.title" :key="domain.key" :label="'称号'">
        <el-space>
          <el-select v-model="domain.select" placeholder="请选择称号">
            <el-option :value="domain.value" />
          </el-select>
          <el-input v-model="domain.value" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeTitle(domain)">删除</el-button>
        </el-space>
      </el-form-item> -->
      <!-- 新增昵称特效 -->

      <el-form-item v-for="(domain, index) in form.nicknameEffect" :key="index" :label="'昵称特效'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择ID特效">
            <el-option v-for="item in nicknameEffectList" :key="item.id" :value="item.id" :label="item.title" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeNicknameEffect(domain)">删除</el-button>
        </el-space>
      </el-form-item>
      <!-- 新增昵称挂件 -->

      <el-form-item v-for="(domain, index) in form.nicknamePendant" :key="index" :label="'昵称挂件'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择挂件">
            <el-option v-for="item in nicknamePendantList" :key="item.id" :value="item.id" :label="item.title" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeNicknamePendant(domain)">删除</el-button>
        </el-space>
      </el-form-item>

      <!-- 新增进场特效 -->

      <el-form-item v-for="(domain, index) in form.march" :key="index" :label="'进场特效'">
        <el-space>
          <el-select v-model="domain.sourceId" placeholder="请选择进场特效">
            <el-option v-for="item in marchList" :key="item.id" :label="item.title" :value="item.id" />
          </el-select>
          <el-input v-model.number="domain.number" placeholder="有效天数">
            <template #suffix>天</template>
          </el-input>
          <el-button color="#d9001b" @click.prevent="removeMarch(domain)">删除</el-button>
        </el-space>
      </el-form-item>
      <!-- 新增按钮 -->
      <div class="btn">
        <el-button type="primary" @click="addDomain">+新增礼物</el-button>
        <el-button type="primary" @click="addHeadFrame">+新增头像框</el-button>
        <el-button type="primary" @click="addCar">+新增坐驾</el-button>
        <el-button type="primary" @click="addLight">+新增麦位光波</el-button>
        <el-button type="primary" @click="addChat">+新增聊天气泡</el-button>
        <!-- <el-button type="primary" @click="addTitle">+新增称号</el-button> -->
        <el-button type="primary" @click="addNicknameEffect">+新增昵称特效</el-button>
        <el-button type="primary" @click="addNicknamePendant">+新增昵称挂件</el-button>
        <el-button type="primary" @click="addMarch">+新增进场特效</el-button>
      </div>

      <!-- radio -->
      <el-form-item label="状态" prop="disabled">
        <el-radio-group v-model="form.disabled" placeholder="请选择">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { editApi, addApi, getGiftListApi } from '@/api/user/pack.js'
import { getGiftListApi as gitGiftDataApi } from '@/api/game/currentAwardPool.js'

import { useToggle } from '@vueuse/core'
import { formData, formRule, formDataCopy } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 获取分类数据
const gitGiftList = async (id) => {
  const { data } = await getGiftListApi({
    categoryId: id,
  })
  return data
}

// 获取礼物数据
const giftList = ref()
;(async function () {
  const { data } = await gitGiftDataApi()
  giftList.value = data
})()

// 获取头像框数据
const headFrameList = ref()
;(async function () {
  const data = await gitGiftList(1)
  headFrameList.value = data
})()

// 获取座驾数据
const carList = ref()
;(async function () {
  const data = await gitGiftList(2)
  carList.value = data
})()

// 获取聊天气泡数据
const chatList = ref()
;(async function () {
  const data = await gitGiftList(3)
  chatList.value = data
})()

// 获取昵称特效数据
const nicknameEffectList = ref()
;(async function () {
  const data = await gitGiftList(6)
  nicknameEffectList.value = data
})()

// 获取昵称挂件
const nicknamePendantList = ref()
;(async function () {
  const data = await gitGiftList(7)
  nicknamePendantList.value = data
})()

// 获取入场特效
const marchList = ref()
;(async function () {
  const data = await gitGiftList(8)
  marchList.value = data
})()

// 获取麦位光波
const lightList = ref()
;(async function () {
  const data = await gitGiftList(9)
  lightList.value = data
})()

// 删除礼物
const removeDomain = (item) => {
  const index = form.gift.indexOf(item)
  if (index !== -1) {
    form.gift.splice(index, 1)
  }
}

// 新增礼物
const addDomain = () => {
  form.gift.push({
    type: 3,
    number: null,
    sourceId: 0,
  })
}

// 新增头像框
const addHeadFrame = () => {
  form.headFrame.push({
    type: 4,
    number: null,
    sourceId: 0,
  })
}

// 删除头像框
const removeHeadFrame = (item) => {
  const index = form.headFrame.indexOf(item)
  if (index !== -1) {
    form.headFrame.splice(index, 1)
  }
}

// 新增座驾
const addCar = () => {
  form.car.push({
    type: 5,
    number: null,
    sourceId: 0,
  })
}

// 删除座驾
const removeCar = (item) => {
  const index = form.car.indexOf(item)
  if (index !== -1) {
    form.car.splice(index, 1)
  }
}

// 新增麦位光波
const addLight = () => {
  form.light.push({
    type: 6,
    number: null,
    sourceId: 0,
  })
}

// 删除麦位光波
const removeLight = (item) => {
  const index = form.light.indexOf(item)
  if (index !== -1) {
    form.light.splice(index, 1)
  }
}

// 新增聊天气泡
const addChat = () => {
  form.chat.push({
    type: 7,
    number: null,
    sourceId: 0,
  })
}

// 删除聊天气泡
const removeChat = (item) => {
  const index = form.chat.indexOf(item)
  if (index !== -1) {
    form.chat.splice(index, 1)
  }
}

// 新增称号
// const addTitle = () => {
//   form.title.push({
//     key: Date.now(),
//     value: '',
//     select: '',
//   })
// }

// 删除称号
// const removeTitle = (item) => {
//   const index = form.title.indexOf(item)
//   if (index !== -1) {
//     form.title.splice(index, 1)
//   }
// }

// 新增昵称特效
const addNicknameEffect = () => {
  form.nicknameEffect.push({
    type: 10,
    number: null,
    sourceId: 0,
  })
}

// 删除昵称特效
const removeNicknameEffect = (item) => {
  const index = form.nicknameEffect.indexOf(item)
  if (index !== -1) {
    form.nicknameEffect.splice(index, 1)
  }
  console.log(form.nicknameEffect)
}

// 新增昵称挂件
const addNicknamePendant = () => {
  form.nicknamePendant.push({
    type: 8,
    number: null,
    sourceId: 0,
  })
}

// 删除昵称挂件
const removeNicknamePendant = (item) => {
  const index = form.nicknamePendant.indexOf(item)
  if (index !== -1) {
    form.nicknamePendant.splice(index, 1)
  }
}

// 新增进场特效
const addMarch = () => {
  form.march.push({
    type: 9,
    number: null,
    sourceId: 0,
  })
}

// 删除进场特效
const removeMarch = (item) => {
  const index = form.march.indexOf(item)
  if (index !== -1) {
    form.march.splice(index, 1)
  }
}

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref()

// 显示弹窗
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  isEdit.value = !!params
  titleName.value = isEdit.value ? '编辑' : '新增'
  // 编辑数据回显
  if (params) {
    Object.assign(form, formDataCopy())
    form.id = params.id
    const nameMap = new Map([
      [1, 'gold'],
      [3, 'gift'],
      [4, 'headFrame'],
      [5, 'car'],
      [6, 'light'],
      [7, 'chat'],
      [8, 'nicknamePendant'],
      [9, 'march'],
      [10, 'nicknameEffect'],
    ])
    if (params.contentList) {
      params.contentList.forEach((item) => {
        if (item.type === 2) {
          form.peeled = item
          return
        }
        const type = nameMap.get(item.type)
        type && form[type].push(item)
      })
    }
  }

  // 初始化表单值
  Object.assign(form, params || formData())
  visible.value = true
}

// 返回数据处理

// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    const newForm = {}
    const { gold, gift, headFrame, car, light, chat, nicknameEffect, nicknamePendant, march } = form
    newForm.data = [
      ...gold,
      ...gift,
      ...headFrame,
      ...car,
      ...light,
      ...nicknameEffect,
      ...nicknamePendant,
      ...chat,
      ...march,
    ]
    newForm.data = newForm.data.filter((item) => {
      return !!item.number
    })
    if (isEdit.value) {
      newForm.id = form.id
      if (Object.keys(form.peeled).length > 0) {
        newForm.data.push(form.peeled)
      }
    }
    newForm.title = form.title
    newForm.disabled = form.disabled

    if (valid) {
      if (isEdit.value) {
        await editApi(newForm)
        proxy.$modal.msgSuccess(`编辑成功`)
        // Object.assign(form, copyForm)
      } else {
        await addApi(newForm)
        proxy.$modal.msgSuccess(`新增成功`)
      }
      emits('queryTable')
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}

defineExpose({ showDialog })
</script>

<style lang="scss" scoped>
.el-form-item__content {
  display: flex;
}
.btn {
  margin-bottom: 15px;
  flex-wrap: wrap;
  .el-button {
    margin-bottom: 7px;
  }
}
</style>
