import request from '@/utils/request'

const apiName = '/primary/jackpot'

/**
 * 补池配置列表
 */
export function getListApi(params) {
  return request({
    url: `${apiName}`,
    method: 'get',
    params,
  })
}

/**
 * 补池产出比统计
 */
export function getStatApi(params) {
  return request({
    url: `${apiName}/special/stat`,
    method: 'get',
    params,
  })
}
/**
 * 设置系统、用户产出投入比
 */
export function setRatioApi(data) {
  return request({
    url: `${apiName}/ratio/config`,
    method: 'post',
    data,
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
