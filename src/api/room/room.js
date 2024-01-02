// 房间列表
import request from '@/utils/request'

const apiName = '/room'

/**
 * 房间列表
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
 * 房间流水
 * @param {*} params
 * @returns
 */

export function getFlowApi(params) {
  return request({
    url: `${apiName}/gift/flow`,
    method: 'get',
    params,
  })
}

/**
 * 赠送人气
 * @param {*} data
 * @returns
 */

export function PopularityApi(data) {
  return request({
    url: `${apiName}/popularity`,
    method: 'post',
    data,
  })
}

/**
 * 封禁房间
 * @param {*} data
 * @returns
 */

export function banApi(data) {
  return request({
    url: `${apiName}/ban`,
    method: 'post',
    data,
  })
}

/**
 * 解封房间
 * @param {*} data
 * @returns
 */

export function unBanApi(params) {
  return request({
    url: `${apiName}/unseal/${params.id}`,
    method: 'post',
  })
}

/**
 * 房间详情
 * @param {*} params
 * @returns
 */

export function getRoomInfoApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'get',
  })
}

/**
 *房间编辑
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
