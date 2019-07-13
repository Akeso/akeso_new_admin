const examination = {
  state: {
    optometric: {},
    SubjectiveOcular: {}
  },
  mutations: {
    handleData: function(state, res) {
      state.optometric = res
      // console.log('optometric===>>>', res)
    },
    handleSubject: function(state, res) {
      state.SubjectiveOcular = res
    }
  },
  actions: {

  }
}

export default examination
