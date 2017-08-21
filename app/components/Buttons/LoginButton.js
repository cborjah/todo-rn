import React, { PropTypes } from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const LoginButton = ({ onPress, label, color }) => (
  <TouchableHighlight
    style={[styles.loginButtonContainer, { backgroundColor: color }]}
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <Text style={styles.text}>{label}</Text>
  </TouchableHighlight>
);

LoginButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
};

export default LoginButton;
