import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const CreateButton = ({ onPress }) => (
  <TouchableHighlight
    style={styles.createButtonContainer}
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <Text style={styles.plus}>+</Text>
  </TouchableHighlight>
);

CreateButton.propTypes = {
  onPress: PropTypes.func,
};

export default CreateButton;
