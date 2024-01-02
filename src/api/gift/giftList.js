// 礼物列表
import request from '@/utils/request'

const apiName = '/gift/manager/gift'

/**
 *  列表
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
 * 删除
 * @param {*} params
 * @returns
 */
export function deleteApi(data) {
  return request({
    url: `${apiName}/del/${data.id}`,
    method: 'delete',
  })
}

/**
 * 上下架操作
 * @param {*} data
 * @returns
 */
export function upAndLowShelvesApi(data) {
  return request({
    url: 'gift/manager/gift/upperLower',
    method: 'put',
    data,
  })
}

/**
 * 获取礼物分类列表
 * @param {*} params
 * @returns
 */
export function getCategoryListApi(params) {
  return request({
    url: '/gift/manager/giftClassify/list',
    method: 'get',
    params,
  })
}
