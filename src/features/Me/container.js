import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Me from './view'
import { getIsLogin, getName, getToken } from '../User/selector'
import UserActions from '../User/action'

const mapStateToProps = (state, props) => ({
  isLogin: getIsLogin(state, props),
  username: getName(state, props),
  token: getToken(state, props),
})

const Actions = {// user others actions
  logout: UserActions.reset,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Me)
