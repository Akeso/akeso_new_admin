import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/followers',
    method: 'get',
    params: query
  })
}
