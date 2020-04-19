import { login, logout } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'

const defaultUserInfo = '{"id": 0, "name": null, "email": null, "avatarUrl": null, "authenticationToken": "", "type": "", "baseType": "", "super": true, "controlPaths": []}'
const user = {
  state: JSON.parse(localStorage.getItem('user') || defaultUserInfo),

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, data) => {
      console.log('updateUserInfo data => ', data)
      localStorage.setItem('user', JSON.stringify(data))
      setToken(data.authenticationToken)
      state.id = data.id
      state.name = data.name
      state.email = data.email
      state.avatarUrl = data.avatarUrl
      state.authenticationToken = data.authenticationToken
      state.type = data.type
      state.baseType = data.baseType
    },
    CLEAR_USER_INFO: (state) => {
      localStorage.clear()
      state.id = ''
      state.name = ''
      state.email = ''
      state.avatarUrl = ''
      state.authenticationToken = ''
      state.type = ''
      state.baseType = ''
    },
    updateUserInfo: (state, data) => {
      console.log('updateUserInfo data => ', data)
      localStorage.setItem('user', JSON.stringify(data))
      setToken(data.authenticationToken)
      state.id = data.id
      state.name = data.name
      state.email = data.email
      state.avatarUrl = data.avatarUrl
      state.authenticationToken = data.authenticationToken
      state.type = data.type
      state.baseType = data.baseType
    }
  },

  actions: {
    updateUserInfo({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_USER_INFO', data)
      })
    },
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password, userInfo.account_type).then(response => {
          const data = response.data
          commit('SET_USER_INFO', data)
          resolve()
        }).catch(error => {
          console.log('error: ', error)
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('CLEAR_USER_INFO')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  },

  getters: {
    id: state => state.id,
    name: state => state.name,
    baseType: state => state.baseType,
    email: state => state.email,
    avatarUrl: state => state.avatarUrl,
    authenticationToken: state => state.authenticationToken,
    controlPaths: state => state.controlPaths,
    super: state => state.super
  }
}

export default user
