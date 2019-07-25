import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/removements',
    method: 'get',
    params: query
  })
}

export function unbind(query) {
  return request({
    url: '/api/a1/removements/unbind',
    method: 'get',
    params: query
  })
}
