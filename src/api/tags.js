import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/tags',
    method: 'get',
    params: query
  })
}

