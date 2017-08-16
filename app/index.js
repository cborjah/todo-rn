import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Login from './screens/Login';
import Lists from './screens/Lists';

EStyleSheet.build({
  // Shows borders for all visible components
  outline: 1,
});

export default () => <Lists />;
