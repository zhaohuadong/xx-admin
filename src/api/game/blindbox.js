import request from '@/utils/request'

const apiName = '/blindbox'

/**
 * 盲盒奖池列表
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

/**
 * 盲盒列表数据统计
 */
export function getTotalListApi(params) {
  return request({
    url: `${apiName}/list/stat`,
    method: 'get',
    params,
  })
}

/**
 * 盲盒礼物列表
 */
export function getGiftListApi(params) {
  return request({
    url: `${apiName}/gift/list`,
    method: 'get',
    params,
  })
}

/**
 * 新增
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
 */
export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}
/**
 * 本期单项删除
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}/nextJackpot/0/type/${params.type}`,
    method: 'delete',
  })
}
/**
 * 下期单项删除
 */
export function deleteDownApi(params) {
  return request({
    url: `${apiName}/${params.id}/nextJackpot/1/type/${params.type}`,
    method: 'delete',
  })
}
/**
 * 本期批量删除
 */
export function batchDeleteApi(data, params) {
  return request({
    url: `${apiName}/batch/nextJackpot/0/type/${params}`,
    method: 'delete',
    data,
  })
}

/**
 * 下期批量删除
 */
export function batchDownDeleteApi(data, params) {
  return request({
    url: `${apiName}/batch/nextJackpot/1/type/${params}`,
    method: 'delete',
    data,
  })
}

/**
 * 一键修改
 */
export function batchEditApi(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'put',
    data,
  })
}

/**
 * 新奖池替换
 */
export function replaceApi(params) {
  return request({
    url: `${apiName}/replace/${params}`,
    method: 'post',
  })
}

/**
 * 中奖记录列表
 */
export function gitLogApi(params) {
  return request({
    url: `/blindbox/log`,
    method: 'get',
    params,
  })
}

/**
 * 盲盒用户列表
 */
export function gitUserApi(params) {
  return request({
    url: `/blindbox/user/list`,
    method: 'get',
    params,
  })
}
