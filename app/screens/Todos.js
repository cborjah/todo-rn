import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

// Mock data
// import { todos } from '../data/mock_data';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array,
    navigation: PropTypes.object,
  }

  handleTodoPress = (todo) => {
    this.props.navigation.navigate('TodoInfo');
  }

  handleCreatePress = () => {
    this.props.navigation.navigate('CreateTodo');
  }

  // Flatlist is using mock data until backend is worked out.
  // Need to add button for navigating back to lists screen.
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Todos" canCreate onPress={this.handleCreatePress} />
        <FlatList
          data={this.props.todos}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.handleTodoPress(item)}
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

export default connect(mapStateToProps, null)(Todos);
