import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/appointments',
    method: 'get',
    params: query
  })
}

export function putConfirm(query) {
  return request({
    url: '/api/a1/appointments/' + query.id + '/confirm',
    method: 'put',
    data: query
  })
}

export function putDone(query) {
  return request({
    url: '/api/a1/appointments/' + query.id + '/done',
    method: 'put',
    data: query
  })
}

export function putCancel(query) {
  return request({
    url: '/api/a1/appointments/' + query.id + '/cancel',
    method: 'put',
    data: query
  })
}
