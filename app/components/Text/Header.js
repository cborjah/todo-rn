import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.header}>TODO APP</Text>
  </View>
);

export default Header;
