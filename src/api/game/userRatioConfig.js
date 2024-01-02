import request from '@/utils/request'

const apiName = '/primary/jackpot'

/**
 * 用户产出比列表
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/user/ratio/list`,
    method: 'get',
    params,
  })
}

/**
 * 获取理论用户产出投入
 */
export function getUserRatioConfigApi(params) {
  return request({
    url: `${apiName}/userRatioConfig`,
    method: 'get',
    params,
  })
}
/**
 * 设置理论用户产出投入
 */
export function editUserRatioConfigApi(data) {
  return request({
    url: `${apiName}/userRatioConfig`,
    method: 'post',
    data,
  })
}
