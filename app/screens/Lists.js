import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';
import lists from '../data/lists';

class Lists extends Component {
  handleListPress = (item) => {
    console.log(`selected ${item.name}`);
  }

  handleCreatePress = () => {
    console.log('pressed create new list button');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Todo Lists" canCreate onPress={this.handleCreatePress} />
        <FlatList
          data={lists}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.handleListPress(item)}
              text={item.name}
            />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default Lists;
