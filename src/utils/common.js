/**
 * 通用js方法封装处理
 */

import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/zh-cn'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

// 日期格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time
        .replace(/-/gm, '/')
        .replace('T', ' ')
        .replace(/\.[\d]{3}/gm, '')
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 表单重置
export function resetForm(formEl) {
  if (!formEl) return
  formEl.resetFields()
}

// 添加日期范围
export function addDateRange(params, dateRange, propName) {
  const search = params
  search.params =
    typeof search.params === 'object' && search.params !== null && !Array.isArray(search.params) ? search.params : {}
  dateRange = Array.isArray(dateRange) ? dateRange : []
  if (typeof propName === 'undefined') {
    search.params.beginTime = dateRange[0]
    search.params.endTime = dateRange[1]
  } else {
    search.params['begin' + propName] = dateRange[0]
    search.params['end' + propName] = dateRange[1]
  }
  return search
}

// 字符串格式化(%s )
export function sprintf(str) {
  const args = arguments
  let flag = true
  let i = 1
  str = str.replace(/%s/g, function () {
    const arg = args[i++]
    if (typeof arg === 'undefined') {
      flag = false
      return ''
    }
    return arg
  })
  return flag ? str : ''
}

// 转换字符串，undefined,null等转化为""
export function parseStrEmpty(str) {
  if (!str || str === 'undefined' || str === 'null') {
    return ''
  }
  return str
}

// 数据合并
export function mergeRecursive(source, target) {
  for (const p in target) {
    try {
      if (target[p].constructor === Object) {
        source[p] = mergeRecursive(source[p], target[p])
      } else {
        source[p] = target[p]
      }
    } catch (e) {
      source[p] = target[p]
    }
  }
  return source
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children',
  }

  const childrenListMap = {}
  const nodeIds = {}
  const tree = []

  for (const d of data) {
    const parentId = d[config.parentId]
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = []
    }
    nodeIds[d[config.id]] = d
    childrenListMap[parentId].push(d)
  }

  for (const d of data) {
    const parentId = d[config.parentId]
    if (nodeIds[parentId] == null) {
      tree.push(d)
    }
  }

  for (const t of tree) {
    adaptToChildrenList(t)
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]]
    }
    if (o[config.childrenList]) {
      for (const c of o[config.childrenList]) {
        adaptToChildrenList(c)
      }
    }
  }
  return tree
}

/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    const part = encodeURIComponent(propName) + '='
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
            const params = propName + '[' + key + ']'
            const subPart = encodeURIComponent(params) + '='
            result += subPart + encodeURIComponent(value[key]) + '&'
          }
        }
      } else {
        result += part + encodeURIComponent(value) + '&'
      }
    }
  }
  return result
}

// 返回项目路径
export function getNormalPath(p) {
  if (p.length === 0 || !p || p === 'undefined') {
    return p
  }
  const res = p.replace('//', '/')
  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1)
  }
  return res
}

// 验证是否为blob格式
export async function blobValidate(data) {
  try {
    const text = await data.text()
    JSON.parse(text)
    return false
  } catch (error) {
    return true
  }
}

dayjs.extend(isLeapYear) // use plugin
dayjs.locale('zh-cn') // use locale

// 日期
function timestamp(date) {
  return new Date(date).getTime()
}

// 获取今天时间
export function newTime() {
  const dayStart = dayjs().startOf('date')
  const dayEnd = dayjs().endOf('date')
  return [timestamp(dayStart.$d), timestamp(dayEnd.$d)]
}
// 获取昨天时间
export function yesterdayTime() {
  const dayStart = dayjs().subtract(1, 'day').startOf('date')
  const dayEnd = dayjs().subtract(1, 'day').endOf('date')
  return [timestamp(dayStart.$d), timestamp(dayEnd.$d)]
}

// 获取本周时间
export function weekTime() {
  const weekStart = dayjs().startOf('week')
  const weekEnd = dayjs().endOf('week')
  return [timestamp(weekStart.$d), timestamp(weekEnd)]
}

// 获取本月时间
export function monthTime() {
  const monthStart = dayjs().startOf('month')
  const monthEnd = dayjs().endOf('month')
  return [timestamp(monthStart.$d), timestamp(monthEnd)]
}

// 获取本月多少天
export function monthDay() {
  return dayjs().daysInMonth()
}

// 获取本年时间
export function yearTime() {
  const yearStart = dayjs().startOf('year')
  const yearEnd = dayjs().endOf('year')
  return [timestamp(yearStart.$d), timestamp(yearEnd)]
}

// 节流
export const throttled = throttle((fun, ...args) => fun(...args), 800, {
  leading: true,
  trailing: false,
})
// 防抖
export const debounced = debounce((fun, ...args) => fun(...args), 800)

/**
 * 代替eval()函数作用 eavl函数会将传入的字符串当做 JavaScript 代码进行执行
 */
export const evilFn = (fn) => {
  const Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
  return new Fn(`return ${fn}`)()
}
