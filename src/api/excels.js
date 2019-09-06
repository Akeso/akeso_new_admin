import request from '@/utils/request'

export function getDailyMore(query) {
  return request({
    url: '/api/a1/excels/daily_more',
    method: 'get',
    params: query
  })
}
