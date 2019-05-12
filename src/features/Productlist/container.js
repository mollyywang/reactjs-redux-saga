import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import productlistCom from "./view";
import { Actions } from "./action";
import { getItems, getIndex, getCounts, getAllNums, getProcessing } from "./selector";
import { getName } from '../Search/selector';
import { getIsLogin } from '../User/selector';

const mapStateToProps = (state, props) => {
  return {
    items: getItems(state),
    index: getIndex(state),
    counts: getCounts(state),
    allNums: getAllNums(state),
    processing: getProcessing(state),
    name: getName(state),
    isLogin: getIsLogin(state),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productlistCom)

