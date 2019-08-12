const article_types = {
  state: {
    article_types: []
  },
  mutations: {
    handleArticleTypes: function(state, res) {
      state.article_types = res
      console.log('article_types===>>>', res)
    }
  },
  actions: {
  }
}

export default article_types
