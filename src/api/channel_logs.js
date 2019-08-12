import request from '@/utils/request'

export function fetchLogs(query) {
  return request({
    url: '/api/a1/channel_logs',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/channel_logs',
    method: 'post',
    data: query
  })
}

export function createGroup(query) {
  return request({
    url: '/api/a1/channel_logs/create_group',
    method: 'post',
    data: query
  })
}
