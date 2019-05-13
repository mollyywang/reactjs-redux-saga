import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import SearchForm from './view'
import Actions from './action'
import ProductlistActions from '../Productlist/action'
import { getName } from './selector'
import { getAllNums } from '../Productlist/selector'

Actions.productsGet = ProductlistActions.request
Actions.productsreset = ProductlistActions.reset

const mapStateToProps = (state, props) => ({
  name: getName(state, props),
  allNums: getAllNums(state, props),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm))
