import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/simple_archives',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/simple_archives/' + query.id,
    method: 'delete'
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/simple_archives',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/simple_archives/' + query.id,
    method: 'put',
    data: query
  })
}
