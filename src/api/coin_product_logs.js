import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/user_coin_products',
    method: 'get',
    params: query
  })
}

export function putExchange(query) {
  return request({
    url: '/api/a1/user_coin_products/' + query.id + '/exchange',
    method: 'put'
  })
}
