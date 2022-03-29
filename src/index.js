// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import {
  BrowserRouter
} from 'react-router-dom';

// Utils
import GlobalStyle from './globalStyle';
import reportWebVitals from './reportWebVitals';

// Managers
import ThemeManager from './shared/manager/ThemeManager';
import AuthManager from './shared/manager/AuthManager';
import ModalManager from './shared/manager/ModalManager';

// Store
import createStore from './redux/createStore';
const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeManager>
        <GlobalStyle />
        <BrowserRouter>
          <ModalManager />
          <AuthManager />
        </BrowserRouter>
      </ThemeManager>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
