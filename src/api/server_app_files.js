import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/server_app_files',
    method: 'get',
    params: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/server_app_files/' + query.id,
    method: 'put',
    data: query
  })
}
