import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';
import LoginPage from './containers/loginPage';
import createNewStore from './store/index';

const defaultStore = {
  login: {
    title: 'hello',
  },
};

const store = createNewStore(defaultStore);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Route
            path="*"
            component={LoginPage}
          />
        </NativeRouter>
      </Provider>
    );
  }
}
