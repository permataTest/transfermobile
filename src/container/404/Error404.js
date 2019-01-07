import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';

class Error404 extends Component {
  render() {
    return (
      <div>
      <TitlePages title={"welcome"} />
      <BodyClass className="no-transition welcome-page" >
        <Auz>
          <h1>Content Error404</h1>
        </Auz>
      </BodyClass>
    </div>
    )
  }
}

export default Error404;

