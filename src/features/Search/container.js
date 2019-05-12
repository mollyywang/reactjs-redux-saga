import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchForm from "./view";
import { Actions } from "./action";
import { Actions as Productlist_Actions } from "../Productlist/action";
import { getName } from "./selector";
import { withRouter } from 'react-router'
import { getAllNums } from '../Productlist/selector'

Actions.productsGet = Productlist_Actions.request;
Actions.productsreset = Productlist_Actions.reset;

const mapStateToProps = (state, props) => {
  return {
    name: getName(state, props),
    allNums: getAllNums(state)
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm))

