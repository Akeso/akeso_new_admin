import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/devices',
    method: 'get',
    params: query
  })
}

export function unbindDevice(query) {
  return request({
    url: '/api/a1/devices/' + query.id,
    method: 'delete',
    params: query
  })
}
