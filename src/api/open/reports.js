import request from '@/utils/request'

export function fetchMonthlyByPhone(query) {
  return request({
    url: '/api/open/reports/monthly_by_phone',
    method: 'get',
    params: query
  })
}
