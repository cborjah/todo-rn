import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { addTodo } from '../actions/user';

import { Container } from '../components/Container';
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
  container: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});

class CreateTodo extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    addTodo: PropTypes.func,
    activeList: PropTypes.string,
    userId: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      todo: null,
    };
  }

  handleCreateTodo = () => {
    // Unfinished
    this.props.addTodo(this.props.userId, this.state.todo, this.props.activeList);
  }

  handleCancel = () => {
    console.log('cancel pressed');
  }

  render() {
    return (
      <Container>
        <CreateText text="Add Task" />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter a task"
            spellCheck={false}
            onChangeText={text => this.setState({ todo: text })}
          />
        </View>
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

const mapStateToProps = (state) => {
  return {
    userId: state.userData.userId,
    activeList: state.userData.activeList,
  };
}

export default connect(mapStateToProps, { addTodo })(CreateTodo);