import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'
import eyeExaminations from './modules/eye_examinations'
import articleTypes from './modules/article_types'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView,
    user,
    eyeExaminations,
    articleTypes
  },
  getters
})

export default store
