import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Error404 from './container/404/Error404';
import DetailBank from './container/DetailBank/DetailBank';
import ResendCode from './container/ResendCode/ResendCode';
import TransferSuccess from './container/Transfer/TransferSuccess/TransferSuccess';
import TransferUnsuccess from './container/Transfer/TransferUnsuccess/TranferUnsuccess';
import Welcome from './container/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/detailbank" component={DetailBank} />
          <Route path="/resendcode" component={ResendCode} />
          <Route path="/transfersuccess" component={TransferSuccess} />
          <Route path="/transferunsuccess" component={TransferUnsuccess} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
