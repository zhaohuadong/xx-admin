import request from '@/utils/request'

// app版本管理
const apiName = '/app/manage'

export function getListApi(params) {
  return request({
    url: `${apiName}/list/${params.appType}`,
    method: 'get',
    params,
  })
}

/**
 *app版本新增
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
 *app版本编辑
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
 *app版本删除
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
 *app版本批量删除
 * @param {*} data
 * @returns
 */
export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'delete',
    data,
  })
}
