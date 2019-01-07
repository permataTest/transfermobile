import React, { Component } from 'react';
import TitlePages from '../../../components/UI/TitlePages/TitlePages';
import Auz from '../../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';

class TransferSuccess extends Component {
  render() {
    return (
      <div>
        <TitlePages title={"welcome"} />
        <BodyClass className="no-transition welcome-page" >
          <Auz>
          <h1>Content TransferSuccess</h1>
          </Auz>
        </BodyClass>
      </div>
    )
  }
}

export default TransferSuccess;
