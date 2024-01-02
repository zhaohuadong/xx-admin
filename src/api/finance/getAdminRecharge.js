import request from '@/utils/request'

const apiName = '/finance/manager/getAdminRecharge'

/**
 * 管理员充值记录
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

// 导出
export function exportAdminApi(params) {
  return request({
    url: `/finance/manager/adminRecharge/export`,
    method: 'post',
    params,
  })
}
