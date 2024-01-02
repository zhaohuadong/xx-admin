<template>
  <div class="flex items-end" :class="isWhite">
    <div class="w-full">
      <el-row :gutter="gutter" class="!ml-0 !mr-0 row">
        <el-col v-for="(item, index) in data" :key="index" class="col" :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">
          <el-card
            :style="{ backgroundColor: cardColor }"
            class="mb-2 text-center"
            :class="[`myTagCard${index}`, getBgC(item)]"
          >
            <template v-if="!$slots['customize']">
              <div
                v-for="(value, key, item_index) in item"
                :key="item_index"
                class="text-gray-500"
                :class="{ 'font-black mb-3': item_index === 0 }"
              >
                <template v-if="!$slots[key]">{{ value }}</template>
                <template v-if="$slots[key]">
                  <!-- 单条值插槽 -->
                  <slot :name="key" :row="value" />
                </template>
              </div>
            </template>
            <!-- 自定义插槽 -->
            <slot name="customize" :row="item" />
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // 数据
  data: {
    type: Array,
    default: () => [],
  },
  // 卡片统一背景颜色
  cardColor: {
    type: String,
    default: '',
  },
  // 盈亏对比的key
  profitAndLossKey: {
    type: String,
    default: '',
  },
  xs: {
    type: Number,
    default: 12,
  },
  sm: {
    type: Number,
    default: 8,
  },
  md: {
    type: Number,
    default: 6,
  },
  lg: {
    type: Number,
    default: 6,
  },
  xl: {
    type: Number,
    default: 4,
  },
  gutter: {
    type: Number,
    default: 10,
  },
})

//  有颜色时样式修改
const isWhite = () => {
  if (props.profitAndLossKey) {
    return 'el-card mb-2 is-always-shadow el-card__body'
  }
}

const getBgC = (item) => {
  const key = props.profitAndLossKey
  if (!key) return
  if (item[key] > 0) {
    return '!bg-green-100'
  } else if (item[key] < 0) {
    return '!bg-red-100'
  } else {
    return '!bg-blue-100'
  }
}
</script>
