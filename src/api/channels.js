import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/channels',
    method: 'get',
    params: query
  })
}

export function fetchCount() {
  return request({
    url: '/api/a1/channels/count',
    method: 'get'
  })
}

