import request from '@/utils/request'

// 用户背包礼物列表
const apiName = '/user/record/gift'

export function getListApi(params) {
  return request({
    url: `${apiName}/bags`,
    method: 'get',
    params,
  })
}

// 冻结背包礼物
export function frozenApi(params) {
  return request({
    url: `${apiName}/frozen/${params.id}`,
    method: 'put',
  })
}

// 批量冻结背包礼物
export function frozenBatchApi(params) {
  const newParams = params.join(',')
  return request({
    url: `${apiName}/frozen/${newParams}`,
    method: 'put',
  })
}

// 解冻背包礼物
export function unfrozenApi(params) {
  return request({
    url: `${apiName}/unfrozen/${params.id}`,
    method: 'put',
  })
}

// 批量解冻背包礼物
export function unFrozenBatchApi(params) {
  const newParams = params.join(',')
  return request({
    url: `${apiName}/unfrozen/${newParams}`,
    method: 'put',
  })
}

// 删除
export function deleteApi(params) {
  return request({
    url: `/user/record/${params.id}`,
    method: 'delete',
  })
}

// 批量删除
export function batchDeleteApi(data) {
  return request({
    url: `/user/record/batch`,
    method: 'delete',
    data,
  })
}

// 导出
export function exportBagsApi(params) {
  return request({
    url: `/user/record/gift/bags/export`,
    method: 'post',
    params,
  })
}
