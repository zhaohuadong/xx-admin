import request from '@/utils/request'

// 用户举报列表

const apiName = '/inform-record'

export function getUserListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

export function getRoomListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}
