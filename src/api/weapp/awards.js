import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/awards',
    method: 'get',
    params: query
  })
}
