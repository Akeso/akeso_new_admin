import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/eye_examinations',
    method: 'get',
    params: query
  })
}
