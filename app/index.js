import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $border: '#E2E2E2',

  // Shows borders for all visible components
  outline: 1,
});

export default () => <Navigator />;
