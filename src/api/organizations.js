import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/organizations',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/organizations/' + query.id,
    method: 'delete',
    params: query
  })
}
