import request from '@/utils/request'

export function checkEmail(query) {
  return request({
    url: '/api/a1/merchants/check',
    method: 'get',
    params: query
  })
}

export function updateControlPaths(data) {
  return request({
    url: '/api/a1/merchants/control_paths',
    method: 'post',
    data: data
  })
}
