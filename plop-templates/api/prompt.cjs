const fs = require('fs')

function getFolder(path) {
  const views = path === 'src/api' ? [path] : []
  const files = fs.readdirSync(path)
  files.forEach(function (item) {
    const stat = fs.lstatSync(path + '/' + item)
    if (stat.isDirectory() === true && item !== 'components') {
      views.push(path + '/' + item)
      views.push.apply(views, getFolder(path + '/' + item))
    }
  })
  return views
}

module.exports = {
  description: '创建接口api',
  prompts: [
    {
      type: 'list',
      name: 'path',
      message: '请选择页面创建目录',
      choices: getFolder('src/api'),
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '文件名不能为空'
        } else {
          return true
        }
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: `${data.path}/${data.name}.js`,
        templateFile: 'plop-templates/api/index.hbs',
        data: {
          apiName: data.path.replace('src/api', '') + '/' + data.name,
        },
      },
    ]
    return actions
  },
}
