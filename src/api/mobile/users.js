import request from '@/utils/request'

export function createItem(query) {
  return request({
    url: '/api/m1/users',
    method: 'post',
    data: query
  })
}
