import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, browserHistory } from 'react-router';
import configureStore from '../../src/store/configureStore';
import rootRoote from '../../src/routes'

const rootElement = document.getElementById('app');
const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line
const store = configureStore(preloadedState);
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={history} routes={rootRoote} />
    </MuiThemeProvider>
  </Provider>
), rootElement);
