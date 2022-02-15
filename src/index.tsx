import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './utils/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { env } from './environments';
import { ListCharacteres } from './components/ListCharacteres';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={env.ROUTER_UTILS.base.home} element={<App />} />
            <Route
              path={env.ROUTER_UTILS.base.characteres}
              element={<ListCharacteres />}
            >
              <Route path={':searchString'} element={<ListCharacteres />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
