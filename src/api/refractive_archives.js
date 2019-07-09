import request from '@/utils/request'

export function create(query) {
  return request({
    url: '/api/a1/services',
    method: 'get',
    params: query
  })
}
