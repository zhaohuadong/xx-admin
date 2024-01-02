import request from '@/utils/request'

// 系统消息-消息记录
const apiName = '/system/message/log'

/**
 *系统消息记录列表
 * @param {*} params
 * @returns
 */
export function getListApi(params) {
  return request({
    url: `${apiName}`,
    method: 'get',
    params,
  })
}

/**
 *消息撤回
 * @param {*} params
 * @returns
 */
export function withdrawApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'put',
  })
}

/**
 *消息批量撤回
 * @param {*} data
 * @returns
 */
export function batchWithdrawApi(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'put',
    data,
  })
}
