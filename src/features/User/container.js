import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userForm from './view'
import { Actions } from './action'
import {
  getIsLogin, getName, getToken, getProcessing, getMsg,
} from './selector'

const mapStateToProps = (state, props) => ({
  isLogin: getIsLogin(state),
  username: getName(state),
  processing: getProcessing(state),
  token: getToken(state),
  msg: getMsg(state),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(userForm)
