import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/sync_frequencies',
    method: 'get',
    params: query
  })
}
