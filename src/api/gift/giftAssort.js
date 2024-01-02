// 礼物分类

import request from '@/utils/request'

const apiName = '/gift/manager/tabConfig'

/**
 * 列表
 * @param {*} params
 * @returns
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

/**
 * 新增
 * @param {*} data
 * @returns
 */
export function addApi(data) {
  return request({
    url: `${apiName}/add`,
    method: 'post',
    data,
  })
}
/**
 * 编辑
 * @param {*} data
 * @returns
 */
export function editApi(data) {
  return request({
    url: `${apiName}/edit`,
    method: 'put',
    data,
  })
}
/**
 * 单项删除
 * @param {*} params
 * @returns
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/del/${params.id}`,
    method: 'delete',
  })
}

/**
 * 批量删除
 * @param {*} data
 * @returns
 */
export function deleteBatchApi(data) {
  return request({
    url: `${apiName}/del`,
    method: 'delete',
    data,
  })
}
