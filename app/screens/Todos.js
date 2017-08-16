import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';
import lists from '../data/lists';

class Todos extends Component {
  handleTodoPress = () => {
    console.log(`todo press`);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Lists" />
        <FlatList
          data={lists}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
            />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default Todos;
