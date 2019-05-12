// selectors
export function getIsLogin(state) {
  return state.user.isLogin
}
export function getName(state) {
  return state.user.username
}
export function getToken(state) {
  return state.user.token
}
export function getProcessing(state) {
  return state.user.processing
}
export function getMsg(state) {
  return state.user.msg
}
