import request from '@/utils/request'

export function fetchOrganizations(query) {
  return request({
    url: '/api/a1/selects/organizations',
    method: 'get',
    params: query
  })
}

