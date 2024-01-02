import request from '@/utils/request'

// 用户邀请列表
const apiName = '/user/record/invite'

export function getListApi(params) {
  return request({
    url: apiName,
    method: 'get',
    params,
  })
}
