import request from '@/utils/request'

/**
 * 个人特殊奖池列表
 */
const apiName = '/primary/personal'
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

/**
 * 特殊个人奖池分类列表
 */
export function getSpecialListApi(params) {
  return request({
    url: `${apiName}/jackpot/type/list`,
    method: 'get',
    params,
  })
}
/**
 *个人特殊奖池列表统计
 */
export function getPersonTotalApi(params) {
  return request({
    url: `${apiName}/list/stat`,
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
 * 一键编辑
 */
export function oneEdit(data) {
  return request({
    url: `${apiName}/batch`,
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
 * 批量删除
 */
export function batchDeleteApi(params, data) {
  return request({
    url: `${apiName}/batch/${params}`,
    method: 'delete',
    data,
  })
}
