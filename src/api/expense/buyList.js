import request from '@/utils/request'

// 商品购买记录

export function getListApi(params) {
  return request({
    url: `/consume/manager/product/buyList`,
    method: 'get',
    params,
  })
}
