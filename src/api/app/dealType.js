import request from '@/utils/request'

// 协议说明分类
const apiName = '/dealType'

/**
 *协议分类列表
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
 *不分页查询协议说明分类列表
 * @param {*} params
 * @returns
 */
export function getTypeListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

/**
 *新增协议说明分类
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
 *修改协议说明分类
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
 *删除协议说明分类
 * @param {*} params
 * @returns
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}
