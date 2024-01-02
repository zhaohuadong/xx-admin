import md5 from 'md5'

// 接口签名秘钥
const FALSE_KEY = ['file[]', 'files[]']
const FALSE_VALUE = [undefined, null, NaN]
const toEncryption = (obj) => {
  let result = ''
  if (obj) {
    /* 过滤对象中的假值 */
    const objFilter = {}
    Object.keys(obj)
      .filter((key) => !FALSE_KEY.includes(key))
      .forEach((key) => {
        if (!FALSE_VALUE.includes(obj[key])) objFilter[key] = obj[key]
      })
    const keys = Object.keys(objFilter).sort().reverse()
    for (const key of keys) result += `${key}${obj[key]}`
    if (import.meta.env.VITE_APP_SECRET) {
      result += import.meta.env.VITE_APP_SECRET
    }
  } else {
    if (import.meta.env.VITE_APP_SECRET) {
      result += import.meta.env.VITE_APP_SECRET
    }
  }
  return md5(result)
}

export default toEncryption
