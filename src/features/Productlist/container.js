import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import productlistCom from './view'
import Actions from './action'
import {
  getItems, getIndex, getCounts, getAllNums, getProcessing,
} from './selector'
import { getName } from '../Search/selector'
import { getIsLogin } from '../User/selector'

const mapStateToProps = (state, props) => ({
  items: getItems(state, props),
  index: getIndex(state, props),
  counts: getCounts(state, props),
  allNums: getAllNums(state, props),
  processing: getProcessing(state, props),
  name: getName(state, props),
  isLogin: getIsLogin(state, props),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(productlistCom)
