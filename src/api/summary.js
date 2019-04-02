import request from '@/utils/request'

export function fetchWhole(query) {
  return request({
    url: '/api/a1/summaries/whole',
    method: 'get',
    params: query
  })
}
