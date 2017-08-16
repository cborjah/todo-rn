import React, { PropTypes } from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './styles';

const LoginButton = ({ onPress }) => (
  <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
    <Text>Login</Text>
  </TouchableHighlight>
);

LoginButton.propTypes = {
  onPress: PropTypes.func,
};

export default LoginButton;
