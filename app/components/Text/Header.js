import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Todo</Text>
  </View>
);

export default Header;
