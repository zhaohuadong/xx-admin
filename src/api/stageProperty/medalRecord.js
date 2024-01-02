import request from '@/utils/request'

const apiName = '/medal/receive'

/**
 * 获取表格数据
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}
