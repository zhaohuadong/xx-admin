import request from '@/utils/request'

/**
 *用户标签配置
 */
const apiName = '/user/label'

/**
 *用户标签列表
 */
export function getListApi(params) {
  return request({
    url: apiName + '/list',
    method: 'get',
    params,
  })
}

/**
 *用户标签删除
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}

/**
 *用户标签新增
 */
export function addApi(data) {
  return request({
    url: apiName,
    method: 'post',
    data,
  })
}

/**
 *用户标签编辑
 */
export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}

/**
 *用户标签批量删除
 */
export function batchDeleteApi(data) {
  return request({
    url: apiName + '/batch',
    method: 'delete',
    data,
  })
}
