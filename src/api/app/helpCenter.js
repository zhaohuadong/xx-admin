import request from '@/utils/request'

// 帮助中心列表
const apiName = '/helpCenter'

/**
 *帮助中心列表
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
 *新增帮助中心信息
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
 *修改帮助中心信息
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
 *删除帮助中心信息
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
 *批量删除帮助中心信息
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
