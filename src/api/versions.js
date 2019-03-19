import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/versions',
    method: 'get',
    params: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/versions/' + query.id,
    method: 'put',
    params: query
  })
}
