import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import store from './config/store';
import reducers from './reducers';

EStyleSheet.build({
  $border: '#E2E2E2',

  // Shows borders for all visible components
  outline: 1,
});

export default () => (
  <Provider store={store(reducers)}>
    <Navigator />
  </Provider>
);
