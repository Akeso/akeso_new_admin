import request from '@/utils/request'

export function fetchChinaData(query) {
  return request({
    url: '/api/a1/city_maps',
    method: 'get',
    params: query
  })
}
