import React from 'react';
import { View, FlatList } from 'react-native';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';
import lists from '../data/lists';

const Lists = () => (
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

export default Lists;
