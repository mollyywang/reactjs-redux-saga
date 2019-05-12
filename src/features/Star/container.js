import { bindActionCreators } from "redux";
import StarCom from "./view";
import { connect } from "react-redux";
import { Actions } from "./action";
import { getItems, getProcessing } from "./selector";
import { getIsLogin, getName, getToken } from "../User/selector";

const mapStateToProps = (state, props) => {
    return {
      isLogin: getIsLogin(state),
      processing: getProcessing(state),
      username: getName(state),
      token: getToken(state),
      items: getItems(state, props)
    }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StarCom)

