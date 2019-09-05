import request from '@/utils/request'

export function fetchReports(query) {
  return request({
    url: '/api/a1/daily_eye_reports',
    method: 'get',
    params: query
  })
}

export function fetchPeriod(query) {
  return request({
    url: '/api/a1/daily_eye_reports/period',
    method: 'get',
    params: query
  })
}
