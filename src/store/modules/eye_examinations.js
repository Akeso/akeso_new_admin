const examination = {
  state: {
    optometric: {}
  },
  mutations: {
    handleData: function(state, res) {
      state.optometric = res
      // console.log('optometric===>>>', res)
    }
  },
  actions: {

  }
}

export default examination
