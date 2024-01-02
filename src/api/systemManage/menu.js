import request from '@/utils/request'

// 系统参数配置
const apiName = '/menu'

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
 * 获取菜单下拉树列表
 */
export function getMenuTreeSelect() {
  return request({
    url: `${apiName}/treeselect`,
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
