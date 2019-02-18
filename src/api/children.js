import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/children',
    method: 'get',
    params: query
  })
}
