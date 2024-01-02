import request from '@/utils/request'

const apiName = '/primary/lottery/log'

/**
 * 中奖记录列表
 */

export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}
