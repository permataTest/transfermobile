import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import '../src/assets/css/app.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import getAccount from './store/reducer/transfersuccess';
import codeReducer from './store/reducer/resendCode';
import detailBank from './store/reducer/DetailBank';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    code   : codeReducer,
    detailB : detailBank,
    getAcc  : getAccount
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//projectnya jadi .war
