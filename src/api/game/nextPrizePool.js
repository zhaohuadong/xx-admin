import request from '@/utils/request'

const apiName = '/primary/jackpot/type'

/**
 * 下期奖池类别列表
 */
export function getTypeListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

/**
 * 高级下期奖池类别列表
 */
export function getNextTypeListApi(params) {
  return request({
    url: `/superior/jackpot/type/list`,
    method: 'get',
    params,
  })
}

/**
 * 获取表格数据byId
 */
export function getListByIdApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'get',
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
 * 批量删除
 */
export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/batch`,
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
    method: 'delete',
    data,
  })
}
