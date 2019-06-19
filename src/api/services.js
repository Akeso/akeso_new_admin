import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/services',
    method: 'get',
    params: query
  })
}

export function updateMerchant(query) {
  return request({
    url: '/api/a1/services/update_merchant',
    method: 'put',
    data: query
  })
}
