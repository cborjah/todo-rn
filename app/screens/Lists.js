import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { selectList, logout } from '../actions/user';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';
import { LogoutButton } from '../components/Buttons';

const returnToLoginScreen = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home' }),
  ],
});

class Lists extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    selectList: PropTypes.func,
    lists: PropTypes.array,
    logout: PropTypes.func,
  }

  // Dispatches action to set the activeList in store
  handleListPress = (item) => {
    this.props.selectList(item.name);
    this.props.navigation.navigate('Todos');
  }

  handleCreatePress = () => {
    this.props.navigation.navigate('CreateList');
  }

  handleEditPress = (item) => {
    this.props.selectList(item.name);
    this.props.navigation.navigate('ListInfo');
  }

  handleLogoutPress = () => {
    this.props.logout();
    this.props.navigation.dispatch(returnToLoginScreen);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Lists" canCreate onPress={this.handleCreatePress} />
        <LogoutButton onPress={this.handleLogoutPress} />
        <FlatList
          data={this.props.lists}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.handleListPress(item)}
              onEditPress={() => this.handleEditPress(item)}
              text={item.name}
              canEdit
            />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.userData.lists,
});

export default connect(mapStateToProps, { selectList, logout })(Lists);
