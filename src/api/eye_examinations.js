import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/eye_examinations',
    method: 'get',
    params: query
  })
}

export function createArchives(query) {
  return request({
    url: '/api/a1/eye_examinations',
    method: 'POST',
    params: query
  })
}

export function createEyeExaminations(query) {
  return request({
    url: '/api/a1/eye_examinations',
    method: 'POST',
    params: query
  })
}
