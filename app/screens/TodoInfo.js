import React, { Component, PropTypes } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { editTodo, editTodoStatus, removeTodo } from '../actions/user';

import { Container } from '../components/Container';
import { BackButton } from '../components/Buttons';

class TodoInfo extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    todo: PropTypes.object,
    status: PropTypes.string,
    userId: PropTypes.string,
    activeListIndex: PropTypes.number,
    activeTodoIndex: PropTypes.number,
    editTodo: PropTypes.func,
    editTodoStatus: PropTypes.func,
    removeTodo: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      todo: null,
      status: null,
      editable: false,
    };
  }

  componentWillMount() {
    this.setState({ todo: this.props.todo.todo, status: this.props.todo.status });
  }

  handleCompletePress = () => {
    // console.log('pressed complete');
    const { userId, activeListIndex, activeTodoIndex } = this.props;

    if (this.state.status === 'OPEN') {
      this.setState({ status: 'COMPLETED' }, () => {
        this.props.editTodoStatus(userId, this.state.status, activeListIndex, activeTodoIndex);
      });
    }
    if (this.state.status === 'COMPLETED') {
      this.setState({ status: 'OPEN' }, () => {
        this.props.editTodoStatus(userId, this.state.status, activeListIndex, activeTodoIndex);
      });
    }
  }


  // Todo is displayed in a TextInput. This toggles whether the TextInput is editable.
  handleEditPress = () => {
    this.setState((prevState, props) => ({
      editable: !prevState.editable,
    }), () => {
      if (this.state.editable) {
        this.refs.textInput.focus();
      }
    });

    /*
    Check to see if edited todo state is different from the todo passed in
    through the props. If so, update database with new todo.
    */
    const { userId, activeListIndex, activeTodoIndex } = this.props;

    /*
    this.state.todo is changed by the component where as this.props.todo.todo is
    from the database. Initially the displayed todo is from props. When the todo
    is edited the value of the displayed todo comes from the TextInput. This way
    the component can quickly display the edited value from the state while the
    database is updated in the background to reflect the changes.
    */
    if (this.state.editable && this.state.todo !== this.props.todo.todo) {
      this.props.editTodo(userId, this.state.todo, activeListIndex, activeTodoIndex);
    }
  }

  handleDeletePress = () => {
    const { userId, activeListIndex, activeTodoIndex } = this.props;
    this.props.removeTodo(userId, activeListIndex, activeTodoIndex);

    // Return to todos screen after deletion
    this.props.navigation.goBack();
  }

  handleBackButtonPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <BackButton onPress={this.handleBackButtonPress} />
        <View style={styles.container}>
          <TextInput
            ref="textInput"
            style={styles.input}
            value={this.state.todo}
            spellCheck={false}
            editable={this.state.editable}
            onChangeText={text => this.setState({ todo: text })}
          />
        </View>
        <Text style={styles.status}>Status: {this.state.status}</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.completed} onPress={this.handleCompletePress}>
            <Text style={styles.text}>
              {this.state.status === 'OPEN' ? 'COMPLETED' : 'OPEN'}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.edit} onPress={this.handleEditPress}>
            <Text style={styles.text}>{this.state.editable ? 'DONE' : 'EDIT'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.delete} onPress={this.handleDeletePress}>
            <Text style={styles.text}>DELETE</Text>
          </TouchableHighlight>
        </View>
      </Container>
    );
  }
}

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
  delete: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
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
    textAlign: 'center',
    fontSize: 30,
  },
  status: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    todo: state.userData.activeTodo,
    userId: state.userData.userId,
    activeListIndex: state.userData.activeListIndex,
    activeTodoIndex: state.userData.activeTodoIndex,
  };
};

export default connect(mapStateToProps, { editTodo, editTodoStatus, removeTodo })(TodoInfo);
