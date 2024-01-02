import request from '@/utils/request'

// 靓号使用记录列表

export function getListApi(params) {
  return request({
    url: `/consume/manager/niceUseNumber/list`,
    method: 'get',
    params,
  })
}
