/**
 * 二次确认：删除、批量删除、禁用等
 * @param {Function} api 请求接口
 * @param {Object} params 请求参数
 * @param {String} tip 提示信息
 * @param {String} message 成功提示信息
 * @param {String} title 提示title
 * @param  fn 方法
 * @return Promise
 */
export const useConfirm = ({
  api,
  tip = '此操作不可退回，确定删除？',
  message = '删除成功',
  title = '温馨提示',
  fn = function () {},
}) => {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm(tip, title, {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true,
    }).then(async () => {
      try {
        const res = await api()
        ElMessage({
          type: 'success',
          message,
        })
        fn()
        resolve(res)
      } catch (error) {
        return reject(error)
      }
    })
  })
}
