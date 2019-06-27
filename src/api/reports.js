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

export function fetchLuxTake(query) {
  return request({
    url: '/api/a1/reports/lux_take',
    method: 'get',
    params: query
  })
}

export function fetchPosture(query) {
  return request({
    url: '/api/a1/reports/posture',
    method: 'get',
    params: query
  })
}

export function fetchStepCount(query) {
  return request({
    url: '/api/a1/reports/step_count',
    method: 'get',
    params: query
  })
}

export function fetchExcelReport(query) {
  return request({
    url: '/api/a1/reports/excel_report',
    method: 'get',
    params: query
  })
}
