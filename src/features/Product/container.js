import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import productCom from './view'
import StarActions from '../Star/action'
import { isInStar } from '../Star/selector'
import { getIsLogin } from '../User/selector'

const mapStateToProps = (state, props) => ({
  isLogin: getIsLogin(state, props),
  isInStar: isInStar(state, props),
})

const Actions = {//actions from other features
  removeStar_request: StarActions.removeStar_request,
  addStar_request: StarActions.addStar_request,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(productCom)
