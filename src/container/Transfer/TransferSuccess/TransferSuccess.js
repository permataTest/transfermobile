import React, { Component } from "react";
import TitlePages from "../../../components/UI/TitlePages/TitlePages";
import Auz from "../../../hoc/Auz/Auz";
import BodyClass from "react-body-classname";
import ContentTransferSuccess from "../../../components/Content/Transfer/TransferSuccess/TransferSuccess";
import Head from "../../../components/UI/Head/Head";
class TransferSuccess extends Component {
  componentDidMount() {

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };
  }
  render() {
    return (
      <div>
        <TitlePages
          title={"Transfer Berhasil | Transfer to Mobile - Permata Bank"}
        />
        <BodyClass className="no-transition transfer-page">
          <Auz>
            <Head>
              <ContentTransferSuccess />
            </Head>
          </Auz>
        </BodyClass>
      </div>
    );
  }
}

export default TransferSuccess;
