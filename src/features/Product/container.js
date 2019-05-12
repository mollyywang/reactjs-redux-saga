import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import productCom from "./view";
import { Actions as StarActions } from "../Star/action";
import { isInStar } from '../Star/selector';
import { getIsLogin } from '../User/selector';

const mapStateToProps = (state, props) => {
  return {
    isLogin: getIsLogin(state),
    isInStar: isInStar(state, props)
  };
};

const Actions = {//user others actions
  removeStar_request:StarActions.removeStar_request,
  addStar_request:StarActions.addStar_request
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(productCom)

