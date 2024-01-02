import request from '@/utils/request'

// 任务管理
const apiName = '/task'

export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

// 新增
export function addApi(data) {
  return request({
    url: `${apiName}`,
    method: 'post',
    data,
  })
}

// 编辑
export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}

// 删除
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}

// 批量删除
export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'delete',
    data,
  })
}

// 获取任务类型列表
export function getCategoryListApi(params) {
  return request({
    url: `${apiName}/category/list`,
    method: 'get',
    params,
  })
}

// 获取奖励列表
export function getPrizeApi(params) {
  return request({
    url: `${apiName}/prize/list`,
    method: 'get',
    params,
  })
}
