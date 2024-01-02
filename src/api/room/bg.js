// 房间主题列表
import request from '@/utils/request'

const apiName = '/room/bg'

/**
 * 房间主题列表
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
    url: `${apiName}`,
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
    url: `${apiName}`,
    method: 'put',
    data,
  })
}

/**
 * 删除
 * @param {*} params
 * @returns
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}`,
    method: 'delete',
    params,
  })
}

/**
 * 批量删除
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

/**
 * 赠送
 * @param {*} data
 * @returns
 */
export function sendApi(data) {
  return request({
    url: `${apiName}/present/gift`,
    method: 'post',
    data,
  })
}
