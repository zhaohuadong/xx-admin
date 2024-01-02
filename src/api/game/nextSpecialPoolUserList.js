import request from '@/utils/request'

const apiName = '/superior/personal/user'

/**
 * 下期用户特殊奖池列表
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
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
