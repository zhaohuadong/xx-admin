// 房间记录下的所有接口
import request from '@/utils/request'

/**
 * 房间封禁记录列表
 * @param {*} params
 * @returns
 */
export function getBlockRecordListApi(params) {
  return request({
    url: '/room/ban-record/list',
    method: 'get',
    params,
  })
}

/**
 * 锁房记录列表
 * @param {*} params
 * @returns
 */
export function getLockRoomListApi(params) {
  return request({
    url: '/room/lock/log/list',
    method: 'get',
    params,
  })
}

/**
 * 踢人记录列表
 * @param {*} params
 * @returns
 */
export function getKickPeopleListApi(params) {
  return request({
    url: '/room/kick/log/list',
    method: 'get',
    params,
  })
}

/**
 * 锁房时间统计
 * @param {*} params
 * @returns
 */

export function getRoomLockStatisticApi(params) {
  return request({
    url: '/room/lock/log/total',
    method: 'get',
    params,
  })
}

/**
 * 查询锁房统计详情
 * @param {*} params
 * @returns
 */

export function getRoomLockDetailApi(params) {
  return request({
    url: '/room/lock/log/total/detail',
    method: 'get',
    params,
  })
}

/**
 * 房间修改记录
 * @param {*} params
 * @returns
 */

export function getRoomEditApi(params) {
  return request({
    url: '/room/edit/log/list',
    method: 'get',
    params,
  })
}

/**
 * 房间封禁记录导出
 * @param {*} params
 * @returns
 */

export function exportBanRecordApi(params) {
  return request({
    url: '/room/ban-record/export',
    method: 'post',
    params,
  })
}
