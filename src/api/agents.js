import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/agents',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/a1/agents',
    method: 'post',
    data: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/agents/' + query.id,
    method: 'delete',
    data: query
  })
}

export function updateItem(query) {
  return request({
    url: '/api/a1/agents/' + query.id,
    method: 'put',
    data: query
  })
}

export function updateDoctorOrganization(query) {
  return request({
    url: '/api/a1/doctors/' + query.id + '/update_doctor_organization',
    method: 'put',
    data: query
  })
}

export function updateLocation(query) {
  return request({
    url: '/api/a1/doctors/update_location',
    method: 'post',
    data: query
  })
}

export function authorizeDoctor(query) {
  return request({
    url: '/api/a1/doctors/authorize',
    method: 'put',
    data: query
  })
}
