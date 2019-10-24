import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/products',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/products',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/products/' + query.id,
    method: 'put',
    data: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/products/' + query.id,
    method: 'delete',
    params: query
  })
}
