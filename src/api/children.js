import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/children',
    method: 'get',
    params: query
  })
}

export function fetchChild(query) {
  return request({
    url: '/api/a1/children/' + query.id,
    method: 'get'
  })
}

export function fetchIntelligentChildren(query) {
  return request({
    url: '/api/a1/children/with_equipment',
    method: 'get',
    params: query
  })
}
