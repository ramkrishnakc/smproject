import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import logger from 'redux-logger';
import reducers from './reducers';
import Routes from './routes/index';

require('../static/scss/index.scss');

const initialState = {
  home: {},
  about: {},
  user: {},
};
const store = createStore(reducers, initialState);

store.subscribe(() => {
  // console.log('new client state', store.getState());
});

// let storeWithMiddleware = applyMiddleware(logger)(store);

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
