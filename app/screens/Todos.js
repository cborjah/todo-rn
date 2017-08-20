import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { selectTodo } from '../actions/user';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';
import { BackButton } from '../components/Buttons';

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array,
    navigation: PropTypes.object,
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

  // Flatlist is using mock data until backend is worked out.
  // Need to add button for navigating back to lists screen.
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Todos" canCreate onPress={this.handleCreatePress} />
        <BackButton onPress={this.handleBackButtonPress} />
        <FlatList
          data={this.props.todos}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.handleTodoPress(item.todo)}
              text={item.todo}
            />
          )}
          keyExtractor={({ item }) => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.userData.activeList.todos,
  };
};

export default connect(mapStateToProps, { selectTodo })(Todos);
