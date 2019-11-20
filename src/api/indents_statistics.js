import request from '@/utils/request'

export function fetchIndentsGrowth(query) {
  return request({
    url: '/api/a1/indents_statistics/growth',
    method: 'get',
    params: query
  })
}
