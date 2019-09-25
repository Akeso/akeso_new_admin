import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/a1/eye_examinations',
    method: 'get',
    params: query
  })
}

export function deleteItem(query) {
  return request({
    url: '/api/a1/eye_examinations/' + query.id,
    method: 'delete'
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

// 查询视功能检查 /api/a1/visual_function_tests
export function showVisualFunctionTests(query) {
  return request({
    url: '/api/a1/visual_function_tests',
    method: 'GET',
    params: query
  })
}

// 创建视功能检查 /api/a1/visual_function_tests
export function visualFunctionTests(query) {
  return request({
    url: '/api/a1/visual_function_tests',
    method: 'POST',
    params: query
  })
}

// 查询眼部检查（主观检查）
export function showSubjectiveOcular(query) {
  return request({
    url: '/api/a1/subjective_ocular_examinations',
    method: 'GET',
    params: query
  })
}

// 创建眼部检查（主观检查）
export function subjectiveOcular(query) {
  return request({
    url: '/api/a1/subjective_ocular_examinations',
    method: 'POST',
    params: query
  })
}

// 查询眼部检查（客观检查）
export function showObjectiveOcular(query) {
  return request({
    url: '/api/a1/objective_ocular_examinations',
    method: 'GET',
    params: query
  })
}

// 创建眼部检查（客观检查）
export function objectiveOcular(query) {
  return request({
    url: '/api/a1/objective_ocular_examinations',
    method: 'POST',
    params: query
  })
}

// 更新下次复查时间
export function updateDate(query) {
  return request({
    url: '/api/a1/eye_examinations/update_date',
    method: 'put',
    data: query
  })
}
