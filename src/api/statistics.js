import request from '@/utils/request'

export function fetchIndex(query) {
  return request({
    url: '/api/a1/statistics',
    method: 'get',
    params: query
  })
}

export function fetchGrowth(query) {
  return request({
    url: '/api/a1/statistics/growth',
    method: 'get',
    params: query
  })
}

export function examineChildren(query) {
  return request({
    url: '/api/a1/statistics/examine_children',
    method: 'get',
    params: query
  })
}
