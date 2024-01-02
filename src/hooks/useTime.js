import { yearTime, newTime, yesterdayTime, weekTime, monthTime, parseTime } from '@/utils/common'
export const useTime = (type) => {
  let result = ['', '']
  switch (type) {
    case '今日':
      result = newTime()
      break
    case '昨天':
      result = yesterdayTime()
      break
    case '本周':
      result = weekTime()
      break
    case '本月':
      result = monthTime()
      break
    case '本年':
      result = yearTime()
      break
  }
  if (type !== '自定义') {
    return [parseTime(parseInt(result[0])), parseTime(parseInt(result[1]))]
  } else if (type !== '全部') {
    return result
  }
}
