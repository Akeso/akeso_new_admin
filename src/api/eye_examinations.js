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

// 添加视光检查
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
