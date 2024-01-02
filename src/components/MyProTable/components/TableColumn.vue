<template>
  <template v-if="column.content">
    <el-table-column v-bind="column" :show-overflow-tooltip="!column.showAll && column.prop !== 'action'">
      <template v-for="v in column.content" :key="v">
        <TableColumn :column="v" :selectionKey="selectionKey" />
      </template>
    </el-table-column>
  </template>
  <template v-else>
    <!-- selection || index -->
    <el-table-column
      v-if="column.type === 'selection' || column.type === 'index'"
      v-bind="column"
      :reserve-selection="column.type === 'selection'"
    />
    <!-- expand -->
    <el-table-column v-if="column.type === 'expand'" v-slot="scope" v-bind="column">
      <slot :name="column.type" :row="scope.row"></slot>
    </el-table-column>
    <!-- select -->
    <el-table-column
      v-if="column.type === 'select'"
      v-bind="column"
      :formatter="(row, colunm, cellValue) => formatSelect(column, row, colunm, cellValue)"
    ></el-table-column>
    <!-- switch -->
    <el-table-column v-if="column.type === 'switch'" v-slot="{ row }" v-bind="column">
      <el-switch
        :model-value="`${row[column.prop]}` === `${column.enum[0].value}`"
        inline-prompt
        :active-text="column?.enum?.[0]?.label ?? '开启'"
        :inactive-text="column?.enum?.[1]?.label ?? '关闭'"
        :validate-event="false"
        @change="(val) => changeSwitch(val, column, row)"
      />
    </el-table-column>
    <!-- 图片 -->
    <el-table-column v-if="column.type === 'img'" v-slot="{ row }" v-bind="column">
      <div v-if="row[column.prop]">
        <el-image
          v-if="!column.animation"
          class="w-10 h-10"
          :src="row[column.prop]"
          :preview-src-list="[row[column.prop]]"
          fit="fill"
          :preview-teleported="true"
        ></el-image>
        <el-image
          v-if="column.animation"
          :src="row[column.prop]"
          :preview-src-list="[row[column.prop]]"
          fit="contain"
          :preview-teleported="true"
        ></el-image>
      </div>
      <div v-else>
        <p>无数据</p>
      </div>
    </el-table-column>
    <!-- tag -->
    <el-table-column v-if="column.type === 'tag'" v-slot="{ row }" v-bind="column">
      <el-tag v-bind="column" :type="filterTagType(column, [row[column.prop]])">
        {{ filterTagText(column, row[column.prop]) }}
      </el-tag>
    </el-table-column>
    <!-- 其他列表项 -->
    <el-table-column
      v-if="!column.type && column.prop"
      v-bind="column"
      :show-overflow-tooltip="!column.showAll && column.prop !== 'action'"
    >
      <!-- 自定义表头项插槽 -->
      <template v-if="$slots[`${column.prop}Header`]" #header="scope">
        <template v-for="name in Object.keys($slots)" :key="name">
          <slot v-if="`${column.prop}Header` === name" :name="name" :column="scope.column" />
        </template>
      </template>
      <!-- 自定义内容插槽 -->
      <template v-if="$slots[column.prop]" #default="scope">
        <template v-for="name in Object.keys($slots)" :key="name">
          <template v-if="column.prop === name">
            <slot :name="name" :row="scope.row" />
          </template>
        </template>
      </template>
      <!-- 一般列表项 -->
      <template v-else #default="scope">
        <!-- 复制功能 -->
        <el-icon
          v-if="column.copyable"
          v-copyText="scope.row[column.prop]"
          class="cursor-pointer align-text-top"
          :size="18"
          color="#69b1ff"
        >
          <icon-ep-copy-document />
        </el-icon>
        {{ formatValue(scope.row, column, scope.row[column.prop]) }}
      </template>
    </el-table-column>
  </template>
</template>

<script setup name="TableColumn">
const props = defineProps({
  // 列表项
  column: {
    type: Object,
  },
  // 表格项唯一字段名
  selectionKey: {
    type: String,
    default: 'id',
  },
})
// 格式化默认值
function formatValue(row, colunm, cellValue) {
  if (cellValue instanceof Array) return cellValue.length ? cellValue.join(',') : '--'
  return cellValue ?? '--'
}
// 格式化枚举值
function formatSelect(item, row, colunm, cellValue) {
  const content = item?.enum?.find((v) => `${v.value}` === `${cellValue}`)?.label ?? '--'
  return content
}
// tag 样式
function filterTagType(item, cellValue) {
  const content = item?.enum?.find((v) => `${v.value}` === `${cellValue}`)?.type ?? ''
  return content
}
// tag文本
function filterTagText(item, cellValue) {
  const content = item?.enum?.find((v) => `${v.value}` === `${cellValue}`)?.label ?? ''
  return content
}
// 改变switch状态
async function changeSwitch(val, item, row) {
  if (item.change) {
    item.change(val, row)
  } else {
    const params = {
      [props.selectionKey]: row[props.selectionKey],
      [item.prop]: item.enum[val ? 0 : 1].value,
    }
    await item.api(params)
    row[item.prop] = item.enum[val ? 0 : 1].value
    ElMessage({
      type: 'success',
      message: '修改成功',
    })
  }
}
</script>
