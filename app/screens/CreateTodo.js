import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { Input } from '../components/TextInput';
import { CreateText } from '../components/Text';

const styles = EStyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginTop: 15,
  },
  create: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: 'green',
  },
  cancel: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: 'red',
  },
});

class CreateTodo extends Component {
  handleCreateTodo = () => {
    console.log('create list');
  }

  handleCancel = () => {
    console.log('cancel pressed');
  }

  render() {
    return (
      <Container>
        <CreateText text="Add Task" />
        <Input placeholder="Enter List Name" />
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.create} onPress={this.handleCreateTodo}>
            <Text style={styles.text}>CREATE</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cancel} onPress={this.handleCancel}>
            <Text style={styles.text}>CANCEL</Text>
          </TouchableHighlight>
        </View>
      </Container>
    );
  }
}

export default CreateTodo;
