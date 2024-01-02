// 礼物墙类别
import request from '@/utils/request'

const apiName = '/gift/manager/wallCategory'

/**
 * 列表
 */
export function getListApi(params) {
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
    url: `${apiName}/add`,
    method: 'post',
    data,
  })
}
/**
 * 编辑
 */
export function editApi(data) {
  return request({
    url: `${apiName}/edit`,
    method: 'put',
    data,
  })
}
/**
 * 单项删除
 */
export function deleteApi(params) {
  params = JSON.parse(JSON.stringify(params).replace(/id/g, 'wallId'))
  return request({
    url: `${apiName}/del`,
    method: 'delete',
    params,
  })
}
