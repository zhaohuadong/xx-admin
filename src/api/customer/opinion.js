import request from '@/utils/request'

// 违规类型列表

const apiName = '/user/opinion'

export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}
