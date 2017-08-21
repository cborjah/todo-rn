import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const LogoutButton = ({ onPress }) => (
  <TouchableHighlight
    style={styles.logoutButtonContainer}
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <Text style={styles.logout}>{'Logout'}</Text>
  </TouchableHighlight>
);

LogoutButton.propTypes = {
  onPress: PropTypes.func,
};

export default LogoutButton;
