import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/awards',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/awards',
    method: 'post',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/awards/' + query.id,
    method: 'put',
    data: query
  })
}

export function changeLogo(query) {
  return request({
    url: '/api/a1/awards/change_logo',
    method: 'get',
    params: query
  })
}

export function changeBanner(query) {
  return request({
    url: '/api/a1/awards/change_banner',
    method: 'get',
    params: query
  })
}

export function fetchImages(query) {
  return request({
    url: '/api/a1/awards/images',
    method: 'get',
    params: query
  })
}
