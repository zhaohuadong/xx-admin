<template>
  <div :class="collapsed && showCollapse && 'collapsed'">
    <!-- 列表搜索项 -->
    <el-form class="form" :inline="true" :model="searchParam" @submit.prevent>
      <div class="contents">
        <!-- 展示在前面的其他自定义搜索项 -->
        <slot name="beforeOther"></slot>
        <el-form-item v-for="item in searchColumns" :key="item.prop" :label="item.label" :prop="item.prop">
          <!-- 时间选择器 -->
          <template v-if="item.type === 'selectTime'">
            <el-radio-group v-model="searchParam[item.prop]" class="mr-2" v-bind="item">
              <el-radio-button v-for="v in item.enum" :key="v.value" :label="v.value">{{ v.label }}</el-radio-button>
            </el-radio-group>
            <template v-if="searchParam[item.prop] === '自定义'">
              <el-date-picker
                v-model="item.selectTime"
                :style="{ width: item.dateType === 'datetimerange' ? '' : '240px' }"
                :type="item.dateType || 'daterange'"
                :value-format="item.dateType === 'datetimerange' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'"
                range-separator="至"
                :start-placeholder="item.dateType === 'datetimerange' ? '开始时间' : '开始日期'"
                :end-placeholder="item.dateType === 'datetimerange' ? '结束时间' : '结束日期'"
                @change="(value) => changeSelectTime(searchParam[item.prop], value)"
              />
            </template>
          </template>
          <!-- 输入项 -->
          <el-input
            v-if="!item.type"
            v-model="searchParam[item.prop]"
            :type="item.inputType || 'text'"
            :style="{ width: '175px' }"
            :placeholder="`请填写${item.label}`"
            clearable
            v-bind="item"
            @keyup.enter="search"
          />
          <!-- 选择项 -->
          <el-select
            v-if="['select', 'switch', 'tag'].includes(item.type)"
            v-model="searchParam[item.prop]"
            clearable
            :placeholder="`请选择${item.label}`"
            v-bind="item"
          >
            <el-option v-for="v in item.enum" :key="v.value" :label="v.label" :value="v.value" />
          </el-select>
          <!-- radio -->
          <el-radio-group v-if="item.type === 'radio'" v-model="searchParam[item.prop]" v-bind="item">
            <el-radio-button v-for="v in item.enum" :key="v.value" v-bind="v" />
          </el-radio-group>
          <!-- 日期 -->
          <el-date-picker
            v-if="item?.type?.indexOf('date') > -1"
            v-model="searchParam[item.prop]"
            :style="{ width: item.type === 'datetimerange' ? '' : '240px' }"
            :type="item.type"
            :value-format="item.dateType === 'datetimerange' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'"
            range-separator="至"
            :start-placeholder="item.type === 'datetimerange' ? '开始时间' : '开始日期'"
            :end-placeholder="item.type === 'datetimerange' ? '结束时间' : '结束日期'"
            v-bind="item"
          />
        </el-form-item>
        <!-- 其他自定义搜索项 -->
        <slot name="other"></slot>
      </div>
      <!-- 操作项 -->
      <div class="flex flex-1 justify-end items-baseline" :style="{ marginBottom: '18px' }">
        <el-button type="primary" :loading="loading" @click="search">查询</el-button>
        <el-button :loading="loading" @click="reset">重置</el-button>
        <!-- 其他操作项 -->
        <slot name="rightAction"></slot>
        <el-button v-if="showCollapse" type="primary" link @click="collapsed = !collapsed">
          {{ collapsed ? '展开' : '收起' }}
          <el-icon class="el-icon--right">
            <icon-ep-arrow-down v-show="collapsed" />
            <icon-ep-arrow-up v-show="!collapsed" />
          </el-icon>
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup name="SearchForm">
const props = defineProps({
  // 搜索项
  searchColumns: {
    type: Array,
    default: () => [],
  },
  // 搜索参数
  modelValue: {
    type: Object,
  },
  // 搜索方法
  search: {
    type: Function,
    required: true,
  },
  // 重置方法
  reset: {
    type: Function,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
const searchParam = computed(() => {
  return props.modelValue
})
// 是否默认折叠搜索项
const collapsed = ref(false)
// 是否显示 展开/收起
const showCollapse = ref(false)
// const { width } = useWindowSize()

onMounted(() => {
  // 大于两行才显示收起按钮
  showCollapse.value = document.getElementsByClassName('form')[0].clientHeight > 102
})

// 处理当前选择的时间
const changeSelectTime = (type, value) => {
  console.log(value)
  searchParam.value.selectTime = type === '自定义' ? value : []
}

defineExpose({
  collapsed,
})
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-wrap: wrap;
}
.collapsed {
  height: 50px;
  overflow: hidden;
  .form {
    flex-wrap: nowrap;
    .contents {
      display: block;
    }
  }
}
:deep(.el-input__wrapper) {
  .el-input__inner {
    line-height: 1px !important;
  }
  input[type='number'] {
    appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
}
</style>
