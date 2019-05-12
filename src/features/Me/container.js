import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Me from "./view";
import { getIsLogin, getName, getToken } from "../User/selector";
import { Actions as UserActions } from '../User/action'

const mapStateToProps = (state, props) => {
  return {
    isLogin: getIsLogin(state),
    username: getName(state),
    token: getToken(state)
  };
};

const Actions = {//user others actions
  logout:UserActions.reset,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Me)
