import React, { Component, PropTypes } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Container } from '../components/Container';
import { Header } from '../components/Text';
import { Input } from '../components/TextInput';
import { LoginButton } from '../components/Buttons';

/*
Navigation action that navigates to Lists screen and clears navigation stack
history for performance optimization.
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
  }

  handleLogin = () => {
    this.props.navigation.dispatch(resetNavigationStack);
  }

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding">
          <Header />
          <Input placeholder="username" spellCheck={false} autoCorrect={false} />
          <Input placeholder="password" secureTextEntry />
          <LoginButton label="LOGIN" onPress={this.handleLogin} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Login;
