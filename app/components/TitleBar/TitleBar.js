import React, { PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const TitleBar = ({ text }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.text}>{text}</Text>
  </View>
);

TitleBar.propTypes = {
  text: PropTypes.string,
};

export default TitleBar;
