import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/followers',
    method: 'get',
    params: query
  })
}

export function createFollow(query) {
  return request({
    url: '/api/a1/followers',
    method: 'post',
    data: query
  })
}

export function fetchFollowList(query) {
  return request({
    url: '/api/a1/followers/logs',
    method: 'get',
    params: query
  })
}

export function updateState(query) {
  return request({
    url: '/api/a1/followers/update_state',
    method: 'put',
    data: query
  })
}
