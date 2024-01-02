import request from '@/utils/request'

// 开屏页列表
const apiName = '/openPage'

/**
 *开屏页列表查询
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
 *新增开屏页
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
 *修改开屏页
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
 *删除开屏页
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
 *批量删除开屏页
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

/**
 *修改开屏页状态
 * @param {*} data
 * @returns
 */
export function editStatusApi(data) {
  return request({
    url: `${apiName}/${data.id}/status/${data.status}`,
    method: 'put',
  })
}
