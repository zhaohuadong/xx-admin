import request from '@/utils/request'

// 用户支付宝账号列表
const apiName = '/user/record/alipay/accounts'

export function getListApi(params) {
  return request({
    url: `${apiName}`,
    method: 'get',
    params,
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
export function batchDeleteApi(params) {
  return request({
    url: `${apiName}/${params}`,
    method: 'delete',
  })
}

// 新增
export function addApi(data) {
  return request({
    url: `/user/record/alipay/account`,
    method: 'post',
    data,
  })
}

// 导出
export function exportListApi(params) {
  return request({
    url: `/user/record/alipay/accounts/export`,
    method: 'post',
    params,
  })
}
