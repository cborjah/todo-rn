import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// Header text for create list/todo screens
const CreateText = ({ text }) => (
  <View style={styles.createTextContainer}>
    <Text style={styles.createText}>{text}</Text>
  </View>
);

CreateText.propTypes = {
  text: PropTypes.string,
};

export default CreateText;
