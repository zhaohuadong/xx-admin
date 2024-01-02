import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd() + '/env')
  const { VITE_APP_ENV } = env

  return {
    // 部署生产环境和开发环境下的URL。
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    envDir: './env',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    // vite 相关配置
    server: {
      port: 80,
      host: true,
      open: true,
      proxy: {
        '/dev-api': {
          target: 'http://test-voicechat.tentacles.cn:8090',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, ''),
        },
      },
    },
    build: {
      minify: 'terser',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            // 静态资源分拆打包
            if (id.includes('node_modules')) {
              // 防止jenkins打包分包失败
              const n = id.lastIndexOf('node_modules')
              return id.toString().slice(n).split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
      // 清除console和debugger
      terserOptions: {
        compress: {
          drop_console: VITE_APP_ENV === 'production', // 打包时删除console
          drop_debugger: true, // 打包时删除 debugger
          pure_funcs: ['console.log'],
        },
        output: {
          // 去掉注释内容
          comments: VITE_APP_ENV === 'production',
        },
      },
    },
  }
})
