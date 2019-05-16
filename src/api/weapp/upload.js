import request from '@/utils/request'

export function uploadImage(query) {
  return request({
    url: '/api/common/uploads',
    method: 'post',
    data: query
  })
}

