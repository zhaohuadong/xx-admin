<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      v-model="valueHtml"
      style="height: 500px; overflow-y: hidden"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['queryContent'])
const mode = ref('default')
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = shallowRef('')

watch(
  () => props.content,
  (val) => {
    valueHtml.value = val
  },
  { deep: true, immediate: true }
)

onMounted(() => {
  valueHtml.value = props.content
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...', MENU_CONF: {} }
editorConfig.MENU_CONF.uploadImage = {
  base64LimitSize: 100 * 1024 * 1024, // (100 * 1024 * 1024= 100M)
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleChange = () => {
  emit('queryContent', valueHtml.value)
}
</script>
