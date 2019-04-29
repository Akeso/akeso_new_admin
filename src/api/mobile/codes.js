import request from '@/utils/request'

export function sendSignUpIn(query) {
  return request({
    url: '/api/m1/codes/sign_up_in',
    method: 'get',
    params: query
  })
}
