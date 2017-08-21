import React, { Component, PropTypes } from 'react';
import { View, FlatList, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { selectTodo } from '../actions/user';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';
import { BackButton } from '../components/Buttons';

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array,
    navigation: PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      all: true,
      completed: false,
      open: false,
    };
  }

  handleTodoPress = (todo) => {
    // console.log(todo);
    this.props.selectTodo(todo);
    this.props.navigation.navigate('TodoInfo');
  }

  handleCreatePress = () => {
    this.props.navigation.navigate('CreateTodo');
  }

  handleBackButtonPress = () => {
    this.props.navigation.goBack(null);
  }

  filterTodos = () => {
    return this.props.todos.filter((todo) => {
      if (this.state.completed) {
        return todo.status === 'COMPLETED';
      } else if (this.state.open) {
        return todo.status === 'OPEN'
      } else {
        return todo;
      }
    });
  }

  handleAllPress = () => {
    this.setState({ all: true, completed: false, open: false });
  }

  handleCompletedPress = () => {
    this.setState({ all: false, completed: true, open: false });
  }
  handleOpenPress = () => {
    this.setState({ all: false, completed: false, open: true });
  }

  // Flatlist is using mock data until backend is worked out.
  // Need to add button for navigating back to lists screen.
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Todos" canCreate onPress={this.handleCreatePress} />
        <BackButton onPress={this.handleBackButtonPress} />
        <FlatList
          data={this.filterTodos()}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.handleTodoPress(item.todo)}
              text={item.todo}
            />
          )}
          keyExtractor={({ item }) => item}
          ItemSeparatorComponent={Separator}
        />
        <View style={styles.footer}>
          <TouchableHighlight
            style={[
              styles.buttonContainer,
              (this.state.all ? { backgroundColor: '#2E7D32' } : null)
            ]}
            underlayColor={styles.$underlayColor}
            onPress={this.handleAllPress}
          >
            <Text style={styles.text}>ALL</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.buttonContainer,
              (this.state.completed ? { backgroundColor: '#2E7D32' } : null)
            ]}
            underlayColor={styles.$underlayColor}
            onPress={this.handleCompletedPress}
          >
            <Text style={styles.text}>COMPLETED</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.buttonContainer,
              (this.state.open ? { backgroundColor: '#2E7D32' } : null)
            ]}
            underlayColor={styles.$underlayColor}
            onPress={this.handleOpenPress}
          >
            <Text style={styles.text}>OPEN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $underlayColor: '#43A047',
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43A047',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: '#388E3C',
  },
  text: {
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.userData.activeList.todos,
  };
};

export default connect(mapStateToProps, { selectTodo })(Todos);
