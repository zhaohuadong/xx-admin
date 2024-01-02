import request from '@/utils/request'

// 系统参数配置
const apiName = '/role'

/**
 * 获取表格数据
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
