import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/messages',
    method: 'get',
    params: query
  })
}

export function fetchLogs(query) {
  return request({
    url: '/api/a1/messages/logs?child_id=' + query.id,
    method: 'get'
  })
}

export function sendToChild(query) {
  return request({
    url: '/api/a1/messages/send_to_child',
    method: 'post',
    data: query
  })
}
