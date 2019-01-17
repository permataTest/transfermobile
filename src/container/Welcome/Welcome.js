import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';
import ContentWelcome from '../../components/Content/Welcome/Welcome';
import Head from '../../components/UI/Head/Head'

class Welcome extends Component {

  render() {
    return (
      <div>
        <TitlePages title={"Halo, Selamat datang di PermataBank | Transfer to Mobile - Permata Bank"} />
        <BodyClass className="no-transition welcome-page" >
          <Auz>
            <Head>
                <ContentWelcome />
            </Head>
          </Auz>
        </BodyClass>
      </div>
    )
  }
}

export default Welcome;
