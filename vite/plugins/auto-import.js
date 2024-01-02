import autoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createAutoImport() {
  return autoImport({
    imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    resolvers: [ElementPlusResolver()],
    // 生成相应的自动导入json文件。
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    dts: false,
  })
}
