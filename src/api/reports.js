import request from '@/utils/request'

export function fetchDaily(query) {
  return request({
    url: '/api/a1/reports/daily',
    method: 'get',
    params: query
  })
}

export function fetchDailyEn(query) {
  return request({
    url: '/api/a1/reports/daily_en',
    method: 'get',
    params: query
  })
}

export function fetchWeekly(query) {
  return request({
    url: '/api/a1/reports/weekly',
    method: 'get',
    params: query
  })
}

export function fetchMonthly(query) {
  return request({
    url: '/api/a1/reports/monthly',
    method: 'get',
    params: query
  })
}

export function fetchOutTime(query) {
  return request({
    url: '/api/a1/reports/out_time',
    method: 'get',
    params: query
  })
}
