import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/feedbacks',
    method: 'get',
    params: query
  })
}

