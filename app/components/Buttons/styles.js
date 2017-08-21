import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: 'transparent',
  loginButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 2,
  },
  addButtonContainer: {
    position: 'absolute',
    top: 23,
    right: 8,
    // paddingHorizontal: 5,
  },
  plus: {
    color: 'white',
    fontSize: 30,
    paddingHorizontal: 5,
  },
  lessThan: {
    color: 'white',
    fontSize: 25,
    paddingHorizontal: 5,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 25,
    left: 8,
    // paddingHorizontal: 5,
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
  logout: {
    color: 'white',
    fontSize: 20,
  },
});
