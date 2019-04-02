import request from '@/utils/request'

// 获取整体分析
export function fetchWhole(query) {
  return request({
    url: '/api/a1/summaries/whole',
    method: 'get',
    params: query
  })
}

// 智能排序
export function fetchSorting(query) {
  return request({
    url: '/api/a1/summaries/sorting',
    method: 'get',
    params: query
  })
}
