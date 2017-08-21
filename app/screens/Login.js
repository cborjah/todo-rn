import React, { Component, PropTypes } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';

import { Container } from '../components/Container';
import { Header } from '../components/Text';
import { LoginButton } from '../components/Buttons';

/*
Navigation action that navigates to Lists screen and clears navigation stack
history for performance.
*/
const resetNavigationStack = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Lists' }),
  ],
});

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    loginUser: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
    };
  }

  // Still need to implement form validation
  handleLogin = () => {
    this.props.loginUser(this.state.username, this.state.password)
      .then(() => this.props.navigation.dispatch(resetNavigationStack));
  }

  render() {
    return (
      <Container backgroundColor='#66BB6A'>
        <KeyboardAvoidingView behavior="padding">
          <Header />
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="username"
              spellCheck={false}
              autoCorrect={false}
              onChangeText={text => this.setState({ username: text })}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry
              onChangeText={text => this.setState({ password: text })}
            />
          </View>
          <LoginButton label="LOGIN" onPress={this.handleLogin} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});

export default connect(null, { loginUser })(Login);
