import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StarCom from './view'
import Actions from './action'
import { getItems, getProcessing } from './selector'
import { getIsLogin, getName, getToken } from '../User/selector'

const mapStateToProps = (state, props) => ({
  isLogin: getIsLogin(state, props),
  processing: getProcessing(state, props),
  username: getName(state, props),
  token: getToken(state, props),
  items: getItems(state, props),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StarCom)
