import React from 'react';
import { hot } from 'react-hot-loader/root';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './configuration/theme/defaultTheme';
import WindowManager from './components/WindowManager';
import { BrowserRouter } from 'react-router-dom';
import configureStore, { history } from 'containers/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Components from 'components';

export const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <WindowManager>
            <CssBaseline />
            <BrowserRouter>
              <Components />
            </BrowserRouter>
          </WindowManager>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
