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
