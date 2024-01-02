import request from '@/utils/request'

/**
 * 登录
 * @param {*} username: string; 用户名
 * @param {*} password: string; 密码
 */
export function loginApi(username, code, imageCode) {
  const data = {
    username,
    code,
    imageCode,
  }
  return request({
    url: '/sys/user/code/login',
    headers: {
      isToken: false,
    },
    method: 'post',
    data,
  })
}

/**
 * 登出
 */
export function logoutApi() {
  return request({
    url: '/sys/user/logout',
    method: 'delete',
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get',
  })
}

/**
 *获取短信验证码
 * @param {*} mobile
 * @returns
 */
export function getCode(mobile) {
  const data = {
    mobile,
  }
  return request({
    url: '/sys/sms/send/code',
    headers: {
      isToken: false,
    },
    method: 'post',
    data,
  })
}

// 获取图形验证码
export function getImageCode(params) {
  console.log(params)
  return request({
    url: `/sys/user/getCode?mobile=${params.mobile}`,
    method: 'get',
  })
}
