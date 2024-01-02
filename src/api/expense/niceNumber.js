import request from '@/utils/request'

// 靓号列表

const apiName = '/consume/manager/niceNumber'

export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

// 新增
export function addApi(data) {
  return request({
    url: `${apiName}/add`,
    method: 'post',
    data,
  })
}

// 编辑
export function editApi(data) {
  return request({
    url: `${apiName}/edit`,
    method: 'put',
    data,
  })
}

// 删除
export function deleteApi(params) {
  return request({
    url: `/consume/manager/niceUseNumber/del/${params.id}`,
    method: 'delete',
  })
}

// 批量删除
export function batchDeleteApi(data) {
  return request({
    url: `/consume/manager/niceUseNumber/del`,
    method: 'delete',
    data,
  })
}
