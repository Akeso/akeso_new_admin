import request from '@/utils/request'

export function fetchArticleTypes(query) {
  return request({
    url: '/api/a1/article_types',
    method: 'get',
    params: query
  })
}

