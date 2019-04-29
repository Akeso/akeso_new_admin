import request from '@/utils/request'

export function fetchItem(query) {
  return request({
    url: '/api/m1/doctors/' + query.id,
    method: 'get',
    params: query
  })
}
