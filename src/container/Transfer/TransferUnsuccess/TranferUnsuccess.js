import React, { Component } from "react";
import TitlePages from "../../../components/UI/TitlePages/TitlePages";
import Auz from "../../../hoc/Auz/Auz";
import BodyClass from "react-body-classname";
import ContentTransferUnsuccess from "../../../components/Content/Transfer/TransferUnsuccess/TransferUnsuccess";
import Head from "../../../components/UI/Head/Head";

class TranferUnsuccess extends Component {
  componentDidMount(){
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
          window.history.go(1);
      };
  }
  render() {
    return (
      <div>
        <TitlePages
          title={"Transfer Gagal | Transfer to Mobile - Permata Bank"}
        />
        <BodyClass className="no-transition transfer-page">
          <Auz>
            <Head>
              <ContentTransferUnsuccess transferUnsuccess={this.props}/>
            </Head>
          </Auz>
        </BodyClass>
      </div>
    );
  }
}

export default TranferUnsuccess;
