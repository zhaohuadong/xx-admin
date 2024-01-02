// 所有房间流水
import request from '@/utils/request'

const apiName = '/room/gift/flow'

/**
 * 所有房间流水
 * @param {*} params
 * @returns
 */

export function getListApi(params) {
  return request({
    url: `${apiName}/all`,
    method: 'get',
    params,
  })
}

// 导出所有房间流水
export function exportApi(params) {
  return request({
    url: `${apiName}/export`,
    method: 'post',
    params,
  })
}
