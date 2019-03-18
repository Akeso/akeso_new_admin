import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/devices',
    method: 'get',
    params: query
  })
}
