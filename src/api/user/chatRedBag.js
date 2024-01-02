import request from '@/utils/request'

const apiName = '/user/record/redPacket'

/**
 * 白名单列表
 * @param {*} params
 * @returns
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/whiteList`,
    method: 'get',
    params,
  })
}

/**
 * 新增白名单
 * @param {*} data
 * @returns
 */
export function addApi(data) {
  return request({
    url: `${apiName}/whiteList`,
    method: 'post',
    data,
  })
}
/**
 * 名单禁用
 * @param {*} data
 * @returns
 */
export function editApi(data) {
  return request({
    url: `${apiName}/whiteList`,
    method: 'put',
    data,
  })
}
