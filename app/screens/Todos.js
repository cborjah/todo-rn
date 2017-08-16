import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';

class Todos extends Component {
  handleTodoPress = (todo) => {
    console.log(`selected ${todo}`);
  }

  handleCreatePress = () => {
    console.log('pressed create todo');
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
          data={['Do Laundry', 'Wash Car', 'Mow Lawn']}
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

export default Todos;
