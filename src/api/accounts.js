import request from '@/utils/request'

export function updateData(query) {
  return request({
    url: '/api/a1/accounts/' + query.id,
    method: 'put',
    params: query
  })
}
