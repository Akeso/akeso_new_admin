import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/questions',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/questions',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/courses/' + query.id,
    method: 'put',
    data: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/questions/' + query.id,
    method: 'delete'
  })
}
