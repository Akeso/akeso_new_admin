const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  device: state => state.app.device,
  token: state => state.user.token,
  eyeExation: state => state.eyeExaminations.optometric,
  Subject: state => state.eyeExaminations.SubjectiveOcular
}
export default getters
