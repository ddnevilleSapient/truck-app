import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';
import SiteWrapper from 'components/SiteWrapper';
import LoginPage from 'containers/loginPage';
import createNewStore from 'store/index';
import copy from 'resources/copy.json';

const defaultStore = {
  login: {
    title: copy['test.copy'],
  },
};

const store = createNewStore(defaultStore);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <SiteWrapper>
            <Route
              path="/"
              component={LoginPage}
            />
          </SiteWrapper>
        </NativeRouter>
      </Provider>
    );
  }
}
