import request from '@/utils/request'

// 用户记录

// 管理员解封记录

export function getListApi(params) {
  return request({
    url: `/user/manager/unsealUser/list`,
    method: 'get',
    params,
  })
}

// 用户封禁记录
export function getUserListApi(params) {
  return request({
    url: `/user/manager/ban/list`,
    method: 'get',
    params,
  })
}

// 实名封禁记录
export function getUserIdAuthBanLogApi(params) {
  return request({
    url: `/user/manager/getUserIdAuthBanLog`,
    method: 'get',
    params,
  })
}

// 用户送礼记录
export function getSendListApi(params) {
  return request({
    url: `/user/manager/getSendGiftList`,
    method: 'get',
    params,
  })
}

// 用户礼包记录
export function getGiftListApi(params) {
  return request({
    url: `/user/record/gift/pack`,
    method: 'get',
    params,
  })
}

// 导出用户封禁记录
export function exportUserApi(params) {
  return request({
    url: `/user/manager/ban/export`,
    method: 'post',
    params,
  })
}

// 导出实名封禁记录
export function exportRealApi(params) {
  return request({
    url: `/user/manager/authBan/export`,
    method: 'post',
    params,
  })
}

// 导出送礼记录
export function exportSendApi(params) {
  return request({
    url: `/user/manager/sendGiftList/export`,
    method: 'post',
    params,
  })
}

// 导出用户礼包记录列表
export function exportPackApi(params) {
  return request({
    url: `/user/record/gift/pack/export`,
    method: 'post',
    params,
  })
}
