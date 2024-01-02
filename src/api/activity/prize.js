import request from '@/utils/request'

// 福利专区
const apiName = '/welfareCenter'

// 奖池奖励列表
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
    url: `${apiName}/prize`,
    method: 'post',
    data,
  })
}

// 编辑
export function editApi(data) {
  return request({
    url: `${apiName}/prize`,
    method: 'put',
    data,
  })
}

// 删除
export function deleteApi(params) {
  return request({
    url: `${apiName}/prize/${params.id}`,
    method: 'delete',
  })
}

// 批量删除
export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/prize/batch`,
    method: 'delete',
    data,
  })
}

// 奖励类型列表
export function getCategoryListApi(params) {
  return request({
    url: `${apiName}/prize/category/list`,
    method: 'get',
    params,
  })
}

// 获取奖励列表
export function getPrizeListApi(params) {
  return request({
    url: `${apiName}/prize/list`,
    method: 'get',
    params,
  })
}

// 一键修改
export function oneEdit(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'put',
    data,
  })
}

// 获取本期奖池库存数量
export function getStockNumberApi(params) {
  return request({
    url: `${apiName}/stockNumber`,
    method: 'get',
    params,
  })
}

// 替换新奖池
export function replaceApi(data) {
  return request({
    url: `${apiName}/jackpot/replace`,
    method: 'post',
    data,
  })
}
