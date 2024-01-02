import request from '@/utils/request'

// 活动消息-小耳朵
const apiName = '/information-ears'

// 小耳朵列表
export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

// 小耳朵详情
export function getLisInfotApi(params) {
  return request({
    url: `${apiName}/list/${params.id}`,
    method: 'get',
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
    url: `${apiName}`,
    method: 'delete',
    params,
  })
}
