import request from '@/utils/request'

// 用户冻结账户日志
const apiName = '/user/record/fund/frozen'

export function getListApi(params) {
  return request({
    url: `${apiName}`,
    method: 'get',
    params,
  })
}

// 导出
export function exportListApi(params) {
  return request({
    url: `/user/record/fund/frozen/export`,
    method: 'post',
    params,
  })
}
