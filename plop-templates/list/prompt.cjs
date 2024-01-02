const fs = require('fs')

function getFolder(path) {
  const views = path === 'src/views' ? ['自定义输入文件路径'] : []
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

// TODO: 路由
module.exports = {
  description: '创建列表页面',
  prompts: [
    {
      type: 'checkbox',
      message: '选择表格需求',
      name: 'table',
      choices: [
        {
          name: '【selection】表格是否需要多选',
          value: 'selection',
          checked: true,
        },
        {
          name: '【initParam】除分页外，是否有初始请求参数（比如有tabs标签页）',
          value: 'initParam',
          checked: false,
        },
        {
          name: '【requestApi】是否需要自定义表格请求值（比如有日期选择控件: date->startTime/endTime）',
          value: 'requestApi',
          checked: false,
        },
        {
          name: '【dataCallback】是否需要自定义表格返回值（比如需要转换值: number->string）',
          value: 'dataCallback',
          checked: false,
        },
        {
          name: '【deleteApi】是否需要删除操作',
          value: 'deleteApi',
          checked: true,
        },
        {
          name: '【deleteBatchApi】是否需要批量删除操作',
          value: 'deleteBatchApi',
          checked: true,
        },
        {
          name: '【otherHeight】页面是否有其他会影响高度的组件（比如tabs标签页）',
          value: 'otherHeight',
          checked: false,
        },
        {
          name: '【#tableHeader】表格头部是否需要自定义操作按钮（新增等）',
          value: 'tableHeader',
          checked: true,
        },
        {
          name: '【#action】表格项是否需要自定义操作按钮（编辑等）',
          value: 'action',
          checked: true,
        },
        {
          name: '【addOrEdit】是否需要新增或编辑弹窗',
          value: 'addOrEdit',
          checked: true,
        },
      ],
    },
    {
      type: 'checkbox',
      message: '选择新增编辑弹窗需求',
      name: 'addOrEditPage',
      choices: [
        {
          name: '【input】是否需要文字输入框',
          value: 'input',
          checked: true,
        },
        {
          name: '【inputNumber】是否需要数字输入框',
          value: 'inputNumber',
          checked: true,
        },
        {
          name: '【select】是否需要下拉选择框',
          value: 'select',
          checked: true,
        },
        {
          name: '【radio】是否需要单选框',
          value: 'radio',
          checked: true,
        },
        {
          name: '【textarea】是否需要多行输入框',
          value: 'textarea',
          checked: true,
        },
        {
          name: '【ImageUpload】是否需要上传图片',
          value: 'ImageUpload',
          checked: true,
        },
        {
          name: '【FileUpload】是否需要上传文件',
          value: 'FileUpload',
          checked: true,
        },
      ],
      when: function (data) {
        return data.table.includes('addOrEdit')
      },
    },
    {
      type: 'list',
      name: 'path',
      message: '请选择页面创建目录',
      choices: getFolder('src/views'),
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入页面创建目录及页面文件路径',
      default: 'src/views/app/system/parameterConfig',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '文件名不能为空'
        } else if (v.indexOf('src/views/') === -1) {
          return '必须在src/views/文件目录下'
        } else if (getFolder('src/views').includes(v)) {
          return '当前路径已存在'
        } else {
          return true
        }
      },
      when: function (data) {
        return data.path === '自定义输入文件路径'
      },
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名',
      validate: (v, data) => {
        if (!v || v.trim === '') {
          return '文件名不能为空'
        } else if (getFolder('src/views').includes(data.path + '/' + v)) {
          return '当前路径已存在'
        } else {
          return true
        }
      },
      when: function (data) {
        return data.path !== '自定义输入文件路径'
      },
    },
  ],
  actions: (data) => {
    const directoryPath = data.path === '自定义输入文件路径' ? data.name : data.path + '/' + data.name
    if (data.table && data.table.length) {
      data.table.forEach((key) => {
        data[key] = true
      })
    }
    data.noSelection = !data.selection
    data.getListApi = !data.getList
    if (data.addOrEditPage && data.addOrEditPage.length) {
      data.addOrEditPage.forEach((key) => {
        data[key] = true
      })
    }
    const actions = [
      {
        type: 'add',
        path: `${directoryPath}/constants.js`,
        templateFile: 'plop-templates/list/constants.hbs',
        data,
      },
      {
        type: 'add',
        path: `${directoryPath}/index.vue`,
        templateFile: 'plop-templates/list/index.hbs',
        data,
      },
    ]
    if (data.addOrEdit) {
      actions.push({
        type: 'add',
        path: `${directoryPath}/components/addOrEdit.vue`,
        templateFile: 'plop-templates/list/addOrEdit.hbs',
        data,
      })
    }
    return actions
  },
}
