import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userForm from './view'
import Actions from './action'
import {
  getIsLogin, getName, getToken, getProcessing, getMsg,
} from './selector'

const mapStateToProps = (state, props) => ({
  isLogin: getIsLogin(state, props),
  username: getName(state, props),
  processing: getProcessing(state, props),
  token: getToken(state, props),
  msg: getMsg(state, props),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(userForm)
