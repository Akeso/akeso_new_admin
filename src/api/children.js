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

export function fetchChildrenEn(query) {
  return request({
    url: '/api/a1/children/index_en',
    method: 'get',
    params: query
  })
}

export function createChild(query) {
  return request({
    url: '/api/a1/children',
    method: 'post',
    data: query
  })
}

export function unbindDoctor(query) {
  return request({
    url: '/api/a1/children/' + query.id + '/unbind_doctor',
    method: 'get'
  })
}
