import React, { PropTypes } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const EditButton = ({ onPress }) => (
  <TouchableHighlight
    style={styles.editButton}
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <Text style={styles.button}>EDIT</Text>
  </TouchableHighlight>
);

const ListItem = ({ text, onPress, canEdit, onEditPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.buttonContainer}>
        {canEdit ? <EditButton onPress={onEditPress} /> : null}
        <Text style={styles.button}>{'\u003e'}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  canEdit: PropTypes.bool,
  onEditPress: PropTypes.func,
};

export default ListItem;
