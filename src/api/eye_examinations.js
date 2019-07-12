import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/eye_examinations',
    method: 'get',
    params: query
  })
}

// 创建屈光档案
export function createArchives(query) {
  return request({
    url: '/api/a1/eye_examinations',
    method: 'POST',
    params: query
  })
}

// 添加验光检查
export function createEyeExaminations(query) {
  return request({
    url: '/api/a1/archives',
    method: 'POST',
    params: query
  })
}

// 查询验光数据
export function QueryOptometricData(query) {
  return request({
    url: '/api/a1/archives',
    method: 'GET',
    params: query
  })
}
// 查询复查验光/api/a1/archives/show_review_optometry
export function showReviewOptometry(query) {
  return request({
    url: '/api/a1/archives/show_review_optometry',
    method: 'GET',
    params: query
  })
}

// 创建验光检查
export function reviewOptometry(query) {
  return request({
    url: '/api/a1/archives/review_optometry',
    method: 'POST',
    params: query
  })
}
