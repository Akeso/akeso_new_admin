import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/overview_diopter_files',
    method: 'get',
    params: query
  })
}
