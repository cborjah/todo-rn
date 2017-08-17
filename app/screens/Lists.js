import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { selectList } from '../actions/user';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';
// import lists from '../data/lists';

class Lists extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    selectList: PropTypes.func,
  }

  handleListPress = (item) => {
    console.log(`selected ${item.name}`);
    this.props.selectList(item.name);
    this.props.navigation.navigate('Todos');
  }

  handleCreatePress = () => {
    this.props.navigation.navigate('CreateList');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Todo Lists" canCreate onPress={this.handleCreatePress} />
        <FlatList
          data={this.props.lists}
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

const mapStateToProps = (state) => {
  return {
    lists: state.userData.lists,
  };
}

export default connect(mapStateToProps, { selectList })(Lists);
