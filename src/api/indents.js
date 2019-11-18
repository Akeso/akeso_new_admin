import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/indents',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/indents',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/indents/' + query.id,
    method: 'put',
    data: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/indents/' + query.id,
    method: 'delete',
    params: query
  })
}

export function showItem(query) {
  return request({
    url: '/api/a1/indents/' + query.id,
    method: 'get'
  })
}
