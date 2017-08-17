import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array,
    navigation: PropTypes.object,
  }

  handleTodoPress = (todo) => {
    console.log(`selected ${todo}`);
  }

  handleCreatePress = () => {
    // console.log('pressed create todo');
    this.props.navigation.navigate('CreateTodo');
  }

  // renderTodoList = () => {
  //   return todos.map((item) => {
  //     return <ListItem name={item} />;
  //   });
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Todos" canCreate onPress={this.handleCreatePress} />
        <FlatList
          data={this.props.todos}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.handleTodoPress(item)}
              text={item}
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
  console.log(state.userData.activeList.todos);
  return {
    todos: state.userData.activeList.todos,
  };
};

export default connect(mapStateToProps, null)(Todos);
