import request from '@/utils/request'

// 用户收支日志

// 全部

const apiName = '/user/record'

export function getAllApi(params) {
  return request({
    url: `${apiName}/capital/detail`,
    method: 'get',
    params,
  })
}

// 收益

export function getDiamondApi(params) {
  return request({
    url: `${apiName}/get/diamond/detail`,
    method: 'get',
    params,
  })
}

// 余额
export function getCoinApi(params) {
  return request({
    url: `${apiName}/coin/detail`,
    method: 'get',
    params,
  })
}

// 导出全部
export function exportAllApi(params) {
  return request({
    url: `${apiName}/capital/export`,
    method: 'post',
    params,
  })
}

// 导出收益
export function exportDiamondApi(params) {
  return request({
    url: `${apiName}/diamond/export`,
    method: 'post',
    params,
  })
}

// 导出余额
export function exportCoinApi(params) {
  return request({
    url: `${apiName}/coin/export`,
    method: 'post',
    params,
  })
}
