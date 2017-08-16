import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',
  separator: {
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
  arrow: {
    fontSize: 20,
  },
});
