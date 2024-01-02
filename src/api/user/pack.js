import request from '@/utils/request'

// 用户礼包列表

const apiName = '/gift/pack'

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
    url: `${apiName}`,
    method: 'post',
    data,
  })
}

// 编辑
export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}

// 删除
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}

// 批量删除
export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'delete',
    data,
  })
}

// 赠送礼包
export function sendApi(data) {
  return request({
    url: `${apiName}/send`,
    method: 'post',
    data,
  })
}

// 按照分类获取个性商品
export function getGiftListApi(params) {
  return request({
    url: `/consume/manager/list/all`,
    method: 'get',
    params,
  })
}
