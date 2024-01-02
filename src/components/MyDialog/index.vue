<template>
  <el-dialog v-bind="$attrs" destroy-on-close :close-on-click-modal="false" @close="emits('toggle', false)">
    <div :style="{ maxHeight: `${height * 0.6}px`, overflowY: 'auto' }">
      <slot></slot>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="emits('toggle', false)">取消</el-button>
        <el-button type="primary" @click="emits('submit')">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
const { height } = useWindowSize()
const emits = defineEmits(['toggle', 'submit'])
</script>
