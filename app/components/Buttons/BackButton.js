import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const BackButton = ({ onPress }) => (
  <TouchableHighlight
    style={styles.BackButtonContainer}
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <Text style={styles.lessThan}>{'<'}</Text>
  </TouchableHighlight>
);

BackButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackButton;
