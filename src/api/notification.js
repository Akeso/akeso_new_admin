import request from '@/utils/request'

export function testNf(query) {
  return request({
    url: '/api/a1/tests/test',
    method: 'get',
    params: query
  })
}

