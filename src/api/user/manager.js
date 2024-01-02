import request from '@/utils/request'

// 用户账号管理
// 查询用户列表
const apiName = '/user/manager'

export function getListApi(params) {
  return request({
    url: apiName + '/list',
    method: 'get',
    params,
  })
}

// 查询用户详情
export function getUserDetailApi(params) {
  return request({
    url: apiName + `/detail/${params.id}`,
    method: 'get',
  })
}
// 编辑用户详情
export function editDetailApi(data) {
  return request({
    url: apiName + `/detail`,
    method: 'put',
    data,
  })
}

// 封禁用户
export function banUserApi(data) {
  return request({
    url: apiName + '/ban',
    method: 'post',
    data,
  })
}

// 解封用户
export function unsealUserApi(data) {
  return request({
    url: apiName + '/unsealUser',
    method: 'post',
    data,
  })
}

// 查询用户封禁记录列表
export function getBanRecordListApi(params) {
  return request({
    url: apiName + '/ban/record',
    method: 'get',
    params,
  })
}

// 赠送礼物礼物列表
export function getGiftListApi(params) {
  return request({
    url: '/gift/manager/adminSend/giftList',
    method: 'get',
    params,
  })
}

// 赠送礼物
export function sendGiftApi(data) {
  return request({
    url: '/user/manager/sendGift',
    method: 'post',
    data,
  })
}

// 用户充值
export function sendGoldCoinsApi(data) {
  return request({
    url: '/user/manager/sendGoldCoins',
    method: 'post',
    data,
  })
}

// 设置支付宝账号绑定上限
export function alipayAccountApi(data) {
  return request({
    url: `/user/manager/alipayAccountNum/${data.userId}/alipayAccountNum/${data.alipayAccountNum}`,
    method: 'put',
    data,
  })
}

// 冻结用户
export function fundFrozenApi(data) {
  return request({
    url: `/user/manager/fund/frozen`,
    method: 'put',
    data,
  })
}

// 解冻用户
export function fundUnfrozenApi(data) {
  return request({
    url: `/user/manager/fund/unfrozen`,
    method: 'put',
    data,
  })
}

// 赠送经验
export function sendExpApi(data) {
  return request({
    url: `/user/manager/send/exp`,
    method: 'put',
    data,
  })
}

// 交友标签列表
export function getTagTypeListApi(params) {
  return request({
    url: '/tag/list',
    method: 'get',
    params,
  })
}

// 查询用户实名认证信息
export function getUserAuthApi(params) {
  return request({
    url: '/user/manager/user/auth',
    method: 'get',
    params,
  })
}
