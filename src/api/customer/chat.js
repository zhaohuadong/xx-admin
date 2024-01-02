import request from '@/utils/request'

// const apiName = '/room/chat-record/list'

/**
 * 奖池类别列表
 */

export function getListApi(params) {
  return request({
    url: `/room/chat-record/list`,
    method: 'get',
    params,
  })
}
/**
 * 获取普通奖池列表
 */
// /primary/next/type/list
export function getListChatApi(params) {
  return request({
    url: `/user/chat-record/list`,
    method: 'get',
    params,
  })
}
