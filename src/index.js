// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// Utils
import GlobalStyle from './globalStyle';
import reportWebVitals from './reportWebVitals';

// Layouts
import ThemeLayout from './shared/layouts/ThemeLayout';

// Routes
import routes from './config/routes';

function App() {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route
          key={`_route-key-${i.toString()}`}
          exact={true}
          {...route}
        />
      ))}
    </Routes>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeLayout>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
