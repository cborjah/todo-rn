import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';

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
      todo: 'Wash Car',
      editable: false,
    };
  }

  componentDidMount() {
    // Set value todo to equal the name of the task selected,
    // name of task will be passed in through props.
    // this.setState({ todo: this.props.todo })
  }

  handleCompletePress = () => {
    console.log('pressed complete');
  }

  // Toggles whether the text input is editable
  handleEditPress = () => {
    this.setState((prevState, props) => ({
      editable: !prevState.editable
    }));

    if (this.state.editable) {
      
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={this.props.todo.todo}
            spellCheck={false}
            editable={this.state.editable}
            onChangeText={text => this.setState({ listName: text })}
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
  };
};

export default connect(mapStateToProps, null)(TodoInfo);
