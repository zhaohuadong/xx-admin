import request from '@/utils/request'

const apiName = '/finance/manager/getWithdrawUser'

/**
 * 充值订单列表
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

// 单个提现同意
export function oneAgree(params) {
  return request({
    url: `/finance/manager/WithdrawUser/agree/${params}`,
    method: 'put',
  })
}

// 批量提现同意
export function someAgree(data) {
  return request({
    url: `/finance/manager/WithdrawUser/agree`,
    method: 'put',
    data,
  })
}

// 单个提现拒绝
export function oneRefuse(params) {
  return request({
    url: `/finance/manager/WithdrawUser/refuse/${params.id}/${params.remark}`,
    method: 'put',
  })
}

// 批量提现拒绝
export function someRefuse(data) {
  return request({
    url: `/finance/manager/WithdrawUser/refuse`,
    method: 'put',
    data,
  })
}

// 提现订单导出
export function exportWithdrawUser(params) {
  return request({
    url: `/finance/manager/withdrawUser/export`,
    method: 'post',
    params,
  })
}
