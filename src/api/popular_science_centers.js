import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/popular_science_centers',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/popular_science_centers',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/popular_science_centers/' + query.id,
    method: 'put',
    data: query
  })
}
