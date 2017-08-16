import React, { PropTypes } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const ListItem = ({ name }) => (
  <TouchableHighlight>
    <View style={styles.row}>
      <Text>{name}</Text>
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  name: PropTypes.string,
};

export default ListItem;
