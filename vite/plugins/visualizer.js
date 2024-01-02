import { visualizer } from 'rollup-plugin-visualizer'

export default function createVisualizer(isBuild) {
  const plugin = []
  isBuild && plugin.push(visualizer({ open: true, gzipSize: true, brotliSize: true }))
  return plugin
}
