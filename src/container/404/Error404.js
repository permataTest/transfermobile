import React, { Component } from "react";
import TitlePages from "../../components/UI/TitlePages/TitlePages";
import Auz from "../../hoc/Auz/Auz";
import BodyClass from "react-body-classname";
import ContentError from "../../components/Content/Error404/Error404";
import Head from "../../components/UI/Head/Head";

class Error404 extends Component {
  componentDidMount(){
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function() {
      window.history.go(1);
    };
  }
  render() {
    return (
      <div>
        <TitlePages title={"404 | Link Tidak Ditemukan - Permata Bank"} />
        <BodyClass className="no-transition page-404-page">
          <Auz>
            <Head>
              <ContentError />
            </Head>
          </Auz>
        </BodyClass>
      </div>
    );
  }
}

export default Error404;
