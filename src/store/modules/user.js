import { login, logout } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'

const user = {
  state: JSON.parse(localStorage.getItem('user') || '{"id": 0, "name": null, "email": null, "avatarUrl": null, "authenticationToken": "", "type": "", "baseType": ""}'),

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatarUrl) => {
      state.avatarUrl = avatarUrl
    },
    SET_TYPE: (state, type) => {
      state.type = type
    },
    SET_BASE_TYPE: (state, baseType) => {
      state.baseType = baseType
    },
    SET_USER_INFO: (state, data) => {
      state.id = data.id
      state.name = data.name
      state.email = data.email
      state.avatarUrl = data.avatarUrl
      state.authenticationToken = data.authenticationToken
      state.type = data.type
      state.baseType = data.baseType
    },
    CLEAR_USER_INFO: (state) => {
      state.id = ''
      state.name = ''
      state.email = ''
      state.avatarUrl = ''
      state.authenticationToken = ''
      state.type = ''
      state.baseType = ''
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.authenticationToken)
          localStorage.setItem('user', JSON.stringify(data))
          commit('SET_USER_INFO', data)
          commit('SET_BASE_TYPE', data.baseType)
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
    authenticationToken: state => state.authenticationToken
  }
}

export default user
