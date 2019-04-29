import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/m1/children',
    method: 'get',
    params: query
  })
}

export function bindDoctor(query) {
  return request({
    url: '/api/m1/children/bind_doctor',
    method: 'get',
    params: query
  })
}

export function fetchItem(query) {
  return request({
    url: '/api/m1/children/' + query.child_id,
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/m1/children',
    method: 'post',
    data: query
  })
}
