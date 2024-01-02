module.exports = function (plop) {
  plop.setWelcomeMessage('请选择要创建的页面：')
  plop.setGenerator('列表页面', require('./plop-templates/list/prompt.cjs'))
  plop.setGenerator('接口api', require('./plop-templates/api/prompt.cjs'))
}
