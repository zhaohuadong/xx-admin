// 日期时间转换

/**
 *  时间转时间戳 时间yyyy-MM-dd HH:mm:ss 转时间戳
 * @param {*} time
 */
export const timeToTimestamp = (time) => {
  const timestamp = Date.parse(new Date(time).toString())
  // timestamp = timestamp / 1000; //时间戳为13位需除1000，时间戳为13位的话不需除1000
  console.log(time + '的时间戳为：' + timestamp)
  return timestamp
}

// 剩余时间转换
export const countDown = (dec) => {
  // const dec = params / 1000
  // 得到天 格式化成前缀加零的样式
  let d = parseInt(dec / 60 / 60 / 24)
  d = d < 10 ? '0' + d : d
  // 得到小时 格式化成前缀加零的样式
  let h = parseInt((dec / 60 / 60) % 24)
  h = h < 10 ? '0' + h : h
  // 得到分钟 格式化成前缀加零的样式
  let m = parseInt((dec / 60) % 60)
  m = m < 10 ? '0' + m : m

  // 得到秒 格式化成前缀加零的样式
  let s = parseInt(dec % 60)
  s = s < 10 ? '0' + s : s
  if (d === '00') {
    return `${h}小时${m}分${s}秒`
  } else {
    return `${d}天${h}小时${m}分${s}秒`
  }
}
