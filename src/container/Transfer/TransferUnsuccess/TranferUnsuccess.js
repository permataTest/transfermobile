import React, { Component } from 'react';
import TitlePages from '../../../components/UI/TitlePages/TitlePages';
import Auz from '../../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';
import ContentTransferUnsuccess from '../../../components/Content/Transfer/TransferUnsuccess/TransferUnsuccess';

class TranferUnsuccess extends Component {
  render() {
    return (
      <div>
        <TitlePages title={"Transfer Gagal | Transfer to Mobile - Permata Bank"} />
        <BodyClass className="no-transition transfer-page" >
          <Auz>
            <ContentTransferUnsuccess />
          </Auz>
        </BodyClass>
      </div>
    )
  }
}

export default TranferUnsuccess;
