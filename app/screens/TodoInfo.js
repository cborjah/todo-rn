import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { editTodo } from '../actions/user';

import { Container } from '../components/Container';
import { BackButton } from '../components/Buttons';

const styles = EStyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginTop: 15,
  },
  completed: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 50,
    backgroundColor: 'green',
  },
  edit: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
  },
  container: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 30,
  },
  status: {
    fontSize: 20,
  },
});

class TodoInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: null,
      editable: false,
    };
  }

  componentWillMount() {
    this.setState({ todo: this.props.todo.todo });
  }

  handleCompletePress = () => {
    console.log('pressed complete');
  }

  // Toggles whether the text input is editable
  handleEditPress = () => {
    this.setState((prevState, props) => ({
      editable: !prevState.editable
    }));

    /*
    Check to see if edited state, todo, is different from todo passed in from props.
    If so, update database with new todo.
    */
    const { userId, activeListIndex, activeTodoIndex } = this.props;
    if (this.state.editable && this.state.todo !== this.props.todo.todo) {
      this.props.editTodo(userId, this.state.todo, activeListIndex, activeTodoIndex);
    }
  }

  handleBackButtonPress = () => {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <Container>
        <BackButton onPress={this.handleBackButtonPress} />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={this.state.todo}
            spellCheck={false}
            editable={this.state.editable}
            onChangeText={text => this.setState({ todo: text })}
          />
        </View>
        <Text style={styles.status}>Status: {this.props.todo.status}</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.completed} onPress={this.handleCompletePress}>
            <Text style={styles.text}>COMPLETE</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.edit} onPress={this.handleEditPress}>
            <Text style={styles.text}>{this.state.editable ? 'DONE' : 'EDIT'}</Text>
          </TouchableHighlight>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.userData.activeTodo,
    userId: state.userData.userId,
    activeListIndex: state.userData.activeListIndex,
    activeTodoIndex: state.userData.activeTodoIndex,
  };
};

export default connect(mapStateToProps, { editTodo })(TodoInfo);
