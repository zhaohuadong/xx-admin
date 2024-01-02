import request from '@/utils/request'

const apiName = '/primary/jackpot'

/**
 * 本期奖池表格数据
 */
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}
/**
 * 获取奖池列表数据统计
 */
export function getListStatApi(params) {
  return request({
    url: `${apiName}/list/stat`,
    method: 'get',
    params,
  })
}

/**
 * 新增或者边间时礼物列表
 */
export function getGiftListApi(params) {
  return request({
    url: `/gift/manager/lottery/gift/list`,
    method: 'get',
    params,
  })
}

/**
 * 新增
 */
export function addApi(data) {
  return request({
    url: `${apiName}`,
    method: 'post',
    data,
  })
}
/**
 * 编辑
 */
export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}
/**
 * 上期单项删除
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}/isNext/0`,
    method: 'delete',
  })
}
/**
 * 下期单项删除
 */
export function deleteNextApi(params) {
  return request({
    url: `${apiName}/${params.id}/isNext/1`,
    method: 'delete',
  })
}
/**
 * 上期批量删除
 */
export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/batch/0`,
    method: 'delete',
    data,
  })
}
/**
 * 下期批量删除
 */
export function batchNextDeleteApi(data) {
  return request({
    url: `${apiName}/batch/1`,
    method: 'delete',
    data,
  })
}

/**
 * 一键修改
 */
export function oneEdit(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'put',
    data,
  })
}

/**
 * 中奖记录
 */
export function getLotteryListApi(params) {
  return request({
    url: `/primary/lottery/log/list`,
    method: 'get',
    params,
  })
}

/**
 * 替换新奖池
 */
export function replaceApi(params) {
  return request({
    url: `${apiName}/replace/${params}`,
    method: 'post',
  })
}
