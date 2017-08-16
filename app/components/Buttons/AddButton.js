import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const AddButton = ({ onPress }) => (
  <TouchableHighlight
    style={styles.addButtonContainer}
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <Text style={styles.plus}>+</Text>
  </TouchableHighlight>
);

AddButton.propTypes = {
  onPress: PropTypes.func,
};

export default AddButton;
