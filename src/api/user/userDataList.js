import request from '@/utils/request'

// 用户记录

// 用户数据列表

export function getListApi(params) {
  return request({
    url: `/user/record/stat/list`,
    method: 'get',
    params,
  })
}

// 用户数据统计
export function getTotalListApi(params) {
  return request({
    url: `/user/record/stat/total`,
    method: 'get',
    params,
  })
}
