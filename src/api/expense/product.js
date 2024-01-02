import request from '@/utils/request'

// 商城单品列表

const apiName = '/consume/manager/product'

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
    url: `${apiName}/del/${params.id}`,
    method: 'delete',
  })
}

// 批量删除
export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/del`,
    method: 'delete',
    data,
  })
}

// 赠送商品
export function sendApi(data) {
  return request({
    url: `${apiName}/give`,
    method: 'post',
    data,
  })
}