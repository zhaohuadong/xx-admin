import request from '@/utils/request'

// 轮播图管理
const apiName = '/slideshow'
/**
 * 轮播图管理
 * /app/banner
 * 接口地址：https://www.apifox.cn/link/project/2043116/apis/api-55652802
 */

/**
 *轮播图列表
 * @param {*} params
 * @returns
 */
export function getListApi(params) {
  return request({
    url: `${apiName}`,
    method: 'get',
    params,
  })
}

/**
 *新增轮播图
 * @param {*} data
 * @returns
 */
export function addApi(data) {
  return request({
    url: `${apiName}`,
    method: 'post',
    data,
  })
}

/**
 *修改轮播图
 * @param {*} data
 * @returns
 */
export function editApi(data) {
  return request({
    url: `${apiName}`,
    method: 'put',
    data,
  })
}

/**
 *删除开屏页
 * @param {*} params
 * @returns
 */
export function deleteApi(params) {
  return request({
    url: `${apiName}/${params.id}`,
    method: 'delete',
  })
}

/**
 *批量删除开屏页
 * @param {*} data
 * @returns
 */
// export function batchDeleteOpenPageApi(data) {
//   return request({
//     url: `/openPage/batch`,
//     method: 'delete',
//     data,
//   })
// }

/**
 *修改开屏页状态
 * @param {*} data
 * @returns
 */
export function editStatusApi(data) {
  return request({
    url: `${apiName}/${data.id}/status/${data.status}`,
    method: 'put',
  })
}
