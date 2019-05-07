import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/organizations',
    method: 'get',
    params: query
  })
}

export function fetchItem(query) {
  return request({
    url: '/api/a1/organizations/' + query.id,
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

export function createItem(query) {
  return request({
    url: '/api/a1/organizations',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/organizations/' + query.id,
    method: 'put',
    data: query
  })
}
