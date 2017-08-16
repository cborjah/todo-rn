import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Login from './screens/Login';
import Lists from './screens/Lists';
import Todos from './screens/Todos';
import CreateList from './screens/CreateList';

EStyleSheet.build({
  $border: '#E2E2E2',

  // Shows borders for all visible components
  outline: 1,
});

export default () => <CreateList />;
