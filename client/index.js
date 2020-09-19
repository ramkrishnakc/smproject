import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CreateStore from './store';
import Routes from './routes/index';

let prevStoredState = localStorage.getItem('reduxState');
if (prevStoredState === null) {
  prevStoredState = {};
} else {
  prevStoredState = JSON.parse(prevStoredState);
}
const store = CreateStore(prevStoredState);

require('../static/scss/index.scss');

ReactDOM.render(
  <>
    <Provider store={store}>
      <Routes />
    </Provider>
  </>,
  document.querySelector('#react-root')
);

// eslint-disable-next-line no-undef
if (module.hot) {
  module.hot.accept(); // eslint-disable-line no-undef
}
