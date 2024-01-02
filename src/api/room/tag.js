import request from '@/utils/request'

// 房间标签管理
const apiName = '/room/tag'

export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

/**
 *房间标签新增
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
 *房间标签编辑
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
 *房间标签删除
 * @param {*} params
 * @returns
 */

export function deleteApi(params) {
  return request({
    url: `${apiName}?roomTagId=${params.id}`,
    method: 'delete',
  })
}
