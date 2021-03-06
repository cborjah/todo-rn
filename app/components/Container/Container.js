import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => (
  <View style={[styles.container, { backgroundColor: backgroundColor }]}>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
