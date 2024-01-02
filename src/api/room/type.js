import request from '@/utils/request'

// 类别管理
const apiName = '/room/type'

export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

/**
 *房间类别新增
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
 *房间类别编辑
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
 *房间类别删除
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
