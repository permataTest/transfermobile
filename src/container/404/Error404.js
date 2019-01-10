import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';
import ContentError from '../../components/Content/Error404/Error404';

class Error404 extends Component {
  render() {
    return (
      <div>
      <TitlePages title={"404 | Link Tidak Ditemukan - Permata Bank"} />
      <BodyClass className="no-transition page-404-page" >
        <Auz>
          <ContentError />
        </Auz>
      </BodyClass>
    </div>
    )
  }
}

export default Error404;

