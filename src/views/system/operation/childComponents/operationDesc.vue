<template>
  <el-dialog v-model="dialogVisible" title="操作日志详情" width="800">
    <el-form label-width="120px" :model="form" style="max-width: 85%">
      <el-form-item label="操作模块">
        <p>{{ props.desc.menu }}</p>
        <!-- <el-input v-model="form.name" /> -->
      </el-form-item>
      <el-form-item label="操作信息">
        <p>{{ props.desc.desc }}</p>
        <!-- <el-input v-model="form.region" /> -->
      </el-form-item>
      <el-form-item label="操作内容">
        <p>{{ props.desc.content }}</p>
        <!-- <el-input v-model="form.type" /> -->
      </el-form-item>
      <el-form-item label="操作地址">
        <p>{{ props.desc.pathUrl }}</p>
        <!-- <el-input v-model="form.type" /> -->
      </el-form-item>
      <el-form-item label="操作方法">
        <p>{{ props.desc.method }}</p>
        <!-- <el-input v-model="form.type" /> -->
      </el-form-item>
      <el-form-item label="请求参数">
        <p>{{ props.desc.params }}</p>
        <!-- <el-input v-model="form.type" /> -->
      </el-form-item>
      <el-form-item label="操作结果">
        <p>{{ props.desc.result }}</p>
        <!-- <el-input v-model="form.type" /> -->
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = false"> 确认 </el-button> -->
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
const props = defineProps({
  desc: {
    type: Object,
  },
})
const dialogVisible = ref(false)
const form = reactive({})
// 暴露子组件属性
defineExpose({ dialogVisible })
</script>

<style lang="scss" scoped></style>
