import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './App';

type State = number;
type Action = {
    type: string,
    payload: number
}

const reducer = (state: State = 10000, action: Action) => {
    switch(action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            if (action.payload > 1000) {
                console.warn('Limit wypłat to 1000 zł');
                return state - 1000;
            }

            if (action.payload > state) {
                console.error('Nie masz tyle pieniędzy, biedaku :P');
                return state;
            }

            return state - action.payload;
        case 'WITHDRAW_ALL':
            console.log('Wypłaciłeś: ' + state + ' zł');
            return 0;
        case 'BALANCE':
            console.log('Twój stan konta to: ' + state + ' zł');
            return state;
        default:
            return state;
    }
}

// @ts-ignore
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// @ts-ignore
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
