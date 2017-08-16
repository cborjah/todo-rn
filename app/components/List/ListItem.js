import React, { PropTypes } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const ListItem = ({ name, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.arrow}>{'\u003e'}</Text>
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func,
};

export default ListItem;
