import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/screenings',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/screenings/' + query.id,
    method: 'delete'
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/screenings',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/screenings/' + query.id,
    method: 'put',
    data: query
  })
}

export function fetchItem(query) {
  return request({
    url: '/api/a1/screenings/' + query.id,
    method: 'get'
  })
}
