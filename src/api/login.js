import request from '@/utils/request'

export function login(username, password, account_type) {
  return request({
    url: '/api/a1/sessions',
    method: 'post',
    data: {
      username,
      password,
      account_type
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/a1/sessions/logout',
    method: 'post'
  })
}
