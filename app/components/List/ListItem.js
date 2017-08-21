import React, { PropTypes } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const EditButton = ({ onPress }) => (
  <TouchableHighlight
    style={{ marginRight: 5, backgroundColor: 'yellow' }}
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <Text style={styles.button}>E</Text>
  </TouchableHighlight>
);

// const DeleteButton = () => (
//   <TouchableHighlight
//     style={{ marginHorizontal: 5, backgroundColor: 'red' }}
//     underlayColor={styles.$underlayColor}
//     onPress={() => console.log('delete pressed')}
//   >
//     <Text style={styles.button}>X</Text>
//   </TouchableHighlight>
// );

const ListItem = ({ text, onPress, canEdit, onEditPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.buttonContainer}>
        {canEdit ? <EditButton onPress={onEditPress} /> : null}
        {/* {canEdit ? <DeleteButton /> : null} */}
        <Text style={styles.button}>{'\u003e'}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  canEdit: PropTypes.boolean,
  onEditPress: PropTypes.func,
};

export default ListItem;
