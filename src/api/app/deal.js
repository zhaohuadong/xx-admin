import request from '@/utils/request'

// 协议说明列表
const apiName = '/deal'

/**
 *协议说明列表
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
 *新增协议说明
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
 *修改协议说明
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
 *删除协议说明
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
 *批量删除协议说明
 * @param {*} data
 * @returns
 */
export function deleteBatchApi(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'delete',
    data,
  })
}
