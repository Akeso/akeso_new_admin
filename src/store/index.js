import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'
import eyeExaminations from './modules/eye_examinations'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView,
    user,
    eyeExaminations
  },
  getters
})

export default store
