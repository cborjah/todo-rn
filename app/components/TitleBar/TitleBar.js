import React, { PropTypes } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { AddButton } from '../Buttons';
import styles from './styles';

const TitleBar = ({
  text,
  canCreate = false,
  onPress,
}) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.text}>{text}</Text>

    {/* Adds a create button to title bar  */}
    {canCreate ? <AddButton onPress={onPress} /> : null}
  </View>
);

TitleBar.propTypes = {
  text: PropTypes.string,
  canCreate: PropTypes.bool,
  // canGoBack: PropTypes.bool,
  // canLogout: PropTypes.bool,
  onPress: PropTypes.func,
};

export default TitleBar;
