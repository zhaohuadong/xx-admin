import request from '@/utils/request'

// 系统参数配置
const apiName = '/operlog/list'

/**
 * 获取表格数据
 */
export function getListApi(params) {
  return request({
    url: `${apiName}`,
    method: 'get',
    params,
  })
}
