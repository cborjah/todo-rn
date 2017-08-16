import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>Todo</Text>
  </View>
);

export default Header;
