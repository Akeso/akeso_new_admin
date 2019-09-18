import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/eye_examinations/follow',
    method: 'get',
    params: query
  })
}

export function updateState(query) {
  return request({
    url: '/api/a1/eye_examinations/update_state',
    method: 'put',
    data: query
  })
}
