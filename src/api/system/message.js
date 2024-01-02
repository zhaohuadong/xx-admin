import request from '@/utils/request'

// 系统消息
const apiName = '/system/message'

/**
 *系统消息列表查询
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
 *添加系统消息
 * @param {*} data
 * @returns
 */
export function addApi(data) {
  return request({
    url: `${apiName}`,
    method: 'post',
    data,
  })
}

/**
 *修改系统消息
 * @param {*} data
 * @returns
 */
export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}

/**
 *删除系统消息
 * @param {*} params
 * @returns
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}

/**
 *系统消息发送
 * @param {*} data
 * @returns
 */
export function sendApi(data) {
  return request({
    url: `${apiName}/send`,
    method: 'post',
    data,
  })
}
