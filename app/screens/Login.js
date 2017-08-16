import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Text';
import { Input } from '../components/TextInput';
import { LoginButton } from '../components/Buttons';

class Login extends Component {
  handleLogin = () => {
    console.log('login button pressed');
  }

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding">
          <Header />
          <Input placeholder="username" spellCheck={false} autoCorrect={false} />
          <Input placeholder="password" secureTextEntry />
          <LoginButton onPress={this.handleLogin} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Login;
