import request from '@/utils/request'

/**
 *文件上传(图片/文件统一上传)
 * @param {*} data
 * @returns
 */
export function addSysObsUpload(data) {
  return request({
    url: '/sys/obs/upload',
    method: 'post',
    data,
    timeout: 240000,
  })
}
