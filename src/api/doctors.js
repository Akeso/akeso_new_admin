import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/doctors',
    method: 'get',
    params: query
  })
}
