<!--返回按钮-->
<template>
  <div class="w-full">
    <el-row class="flex justify-end mb-3.5">
      <slot name="action"></slot>
      <router-link :to="toPath">
        <el-button type="primary">返回</el-button>
      </router-link>
    </el-row>
    <el-row>
      <template #default>
        <slot></slot>
      </template>
    </el-row>
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: [Object],
})
const toPath = ref({})
watch(
  () => props.modelValue,
  (val) => {
    toPath.value = val
  },
  { deep: true, immediate: true }
)
</script>
