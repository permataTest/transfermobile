import React, { Component } from "react";
import TitlePages from "../../components/UI/TitlePages/TitlePages";
import Auz from "../../hoc/Auz/Auz";
import BodyClass from "react-body-classname";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action/index";
import ContentRecendCode from "../../components/Content/RecendCode/ResendCode";
import Head from "../../components/UI/Head/Head";

class ResendCode extends Component {
  componentDidMount() {
    this.props.getDataCode();

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };
  }

  render() {
    return (
      <div>
        <TitlePages title={"Kode Verifikasi | Transfer to Mobile - Permata Bank"}/>
        <BodyClass className="no-transition resend-code-page">
          <Auz>
            <Head>
              <ContentRecendCode
                code={this.props.verification}
                history={this.props.history}
              />
            </Head>
          </Auz>
        </BodyClass>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDataCode: () => dispatch(actionTypes.getCode())
  };
};

const mapStateToProps = state => {
  return {
    verification: state.code.verification
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResendCode);
