import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//reducer
const initialState = {
  userInfo: {
    name: 'zbw'
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_INFO':
      return {
        ...state,
        userInfo: action.userInfo
      }
    default:
      return initialState;
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store} dispatch={store.dispatch}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
