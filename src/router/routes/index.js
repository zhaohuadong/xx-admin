/**
 * 默认是懒加载的
 * eager 是否直接引入所有模块
 */

const ctx = import.meta.glob('./modules/*.js', { eager: true })

const defaultRoutes = Object.values(ctx)
  .map((item) => item.default[0])
  .filter((item) => item.sort)
  .sort((a, b) => a.sort - b.sort)
export default defaultRoutes
