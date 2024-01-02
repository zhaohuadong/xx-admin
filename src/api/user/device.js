import request from '@/utils/request'

// 用户设备管理列表
const apiName = '/user/record/device'

export function getListApi(params) {
  return request({
    url: `${apiName}/list`,
    method: 'get',
    params,
  })
}

// 用户设备封禁、解封

export function getTypeApi(data) {
  return request({
    url: `${apiName}/frozen`,
    method: 'post',
    data,
  })
}

// 导出
export function exportDeviceApi(params) {
  return request({
    url: `${apiName}/export`,
    method: 'post',
    params,
  })
}
