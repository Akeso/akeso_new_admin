import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/doctors',
    method: 'get',
    params: query
  })
}

export function showData(query) {
  return request({
    url: '/api/a1/doctors/' + query.id,
    method: 'get',
    params: query
  })
}

export function updateData(query) {
  return request({
    url: '/api/a1/doctors/' + query.id,
    method: 'put',
    data: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/doctors',
    method: 'post',
    data: query
  })
}
