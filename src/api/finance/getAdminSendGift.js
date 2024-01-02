import request from '@/utils/request'

const apiName = '/finance/manager/getAdminSendGift'

/**
 * 管理员送礼记录
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}
