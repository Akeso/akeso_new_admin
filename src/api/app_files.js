import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/app_files',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/app_files/' + query.id,
    method: 'delete'
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/app_files',
    method: 'post',
    data: query
  })
}
