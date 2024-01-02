import request from '@/utils/request'

const apiName = '/superior/next/type'

/**
 * 下期奖池类别列表
 */

export function getListApi(params) {
  return request({
    url: `${apiName}/jackpot/list`,
    method: 'get',
    params,
  })
}
/**
 * 获取普通奖池列表
 */
// /primary/next/type/list
export function getListPrimaryApi(params) {
  return request({
    url: `${apiName}/list`,
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
 * 单项删除
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}

/**
 * 下期奖池配置开关
 */
export function switchNextApi(params) {
  return request({
    url: `${apiName}/switch/set`,
    method: 'put',
    params,
  })
}

const personApiName = '/superior/personal/type'

/**
 * 特殊类别列表
 */
export function getPersonListApi(params) {
  return request({
    url: `${personApiName}/list`,
    method: 'get',
    params,
  })
}

/**
 * 新增
 */
export function addPersonApi(data) {
  return request({
    url: `${personApiName}`,
    method: 'post',
    data,
  })
}
/**
 * 编辑
 */
export function editPersonApi(data) {
  return request({
    url: `${personApiName}`,
    method: 'put',
    data,
  })
}
/**
 * 单项删除
 */
export function deletePersonApi(params) {
  return request({
    url: `${personApiName}/${params.id}`,
    method: 'delete',
  })
}
