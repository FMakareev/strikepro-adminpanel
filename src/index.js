import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import Store from "./store/store";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {initLocalesClient} from "./store/reducers/intl/actions";


Store.dispatch(initLocalesClient());


ReactDOM.render(<Provider store={Store}>
  <IntlProvider>
    <App />
  </IntlProvider>
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
