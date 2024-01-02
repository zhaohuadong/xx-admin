import request from '@/utils/request'

/**
 * 系统管理-部门管理
 * /dept/list
 * @param {*} params
 * @returns
 */
export function getDeptList(params) {
  return request({
    url: `/dept/list`,
    method: 'get',
    params,
  })
}
