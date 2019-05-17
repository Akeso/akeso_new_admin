import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/wx_organizations',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/wx_organizations/' + query.id,
    method: 'delete',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/wx_organizations',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/wx_organizations/' + query.id,
    method: 'put',
    data: query
  })
}
