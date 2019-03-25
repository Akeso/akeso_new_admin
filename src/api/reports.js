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
    methods: 'get',
    params: query
  })
}

export function fetchMonthly(query) {
  return request({
    url: '/api/a1/reports/monthly',
    methods: 'get',
    params: query
  })
}

