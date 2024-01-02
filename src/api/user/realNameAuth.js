import request from '@/utils/request'

// 用户实名认证
const apiName = '/user/manager'

// 用户实名认证列表
export function getListApi(params) {
  return request({
    url: apiName + '/getRealNameList',
    method: 'get',
    params,
  })
}

// 用户实名认证审核
export function doAuthApi(data) {
  return request({
    url: apiName + '/doAuth',
    method: 'post',
    data,
  })
}

// 用户实名认证撤销审核
export function revokeAuthApi(data) {
  return request({
    url: apiName + '/revokeAuth',
    method: 'post',
    data,
  })
}

// 用户实名封禁/解封
export function realNameBanApi(data) {
  return request({
    url: apiName + '/realNameBan',
    method: 'put',
    data,
  })
}
