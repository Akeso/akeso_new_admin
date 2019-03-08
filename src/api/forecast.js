import request from '@/utils/request'

export function fetchOptions(query) {
  return request({
    url: '/api/a1/forecasts/options',
    method: 'get',
    params: query
  })
}

export function fetchForecasts(query) {
  return request({
    url: '/api/a1/forecasts',
    methods: 'get',
    params: query
  })
}
