import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';
import ContentWelcome from '../../components/Content/Welcome/Welcome';

class Welcome extends Component {
  render() {
    return (
      <div>
        <TitlePages title={"welcome"} />
        <BodyClass className="no-transition welcome-page" >
          <Auz>
            <ContentWelcome />
          </Auz>
        </BodyClass>
      </div>
    )
  }
}

export default Welcome;
