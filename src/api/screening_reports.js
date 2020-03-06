import request from '@/utils/request'

export function fetchDistribute(query) {
  return request({
    url: '/api/a1/screening_reports/distribute',
    method: 'get',
    params: query
  })
}
