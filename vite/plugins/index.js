import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createComponents from './vue-components'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
import createVisualizer from './visualizer'
import createIcons from './icons'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createIcons())
  vitePlugins.push(createVisualizer(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
