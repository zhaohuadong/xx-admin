import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'

export default function createComponents() {
  return Components({
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        // icon自动引入的组件前缀
        prefix: 'icon',
        // 自定义的icon模块集合
        customCollections: ['user', 'home'],
      }),
    ],
  })
}
