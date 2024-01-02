import request from '@/utils/request'

// app版本配置
const apiName = '/app/version'

export function getListApi(params) {
  return request({
    url: `${apiName}/list/${params.appType}`,
    method: 'get',
    params,
  })
}

export function addApi(data) {
  return request({
    url: `${apiName}`,
    method: 'post',
    data,
  })
}

export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}

export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}

export function batchDeleteApi(data) {
  return request({
    url: `${apiName}/batch`,
    method: 'delete',
    data,
  })
}

export function editStatusApi(data) {
  return request({
    url: `${apiName}/${data.versionId}/status/${data.status}`,
    method: 'post',
  })
}
