import React, { Component, PropTypes } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';

import { selectList } from '../actions/user';

import { TitleBar } from '../components/TitleBar';
import { ListItem, Separator } from '../components/List';

// const resetNavigationStack = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'CreateList' }),
//   ],
// });

class Lists extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    selectList: PropTypes.func,
    lists: PropTypes.array,
  }

  constructor(props) {
    super(props);

    // const ds = new ListView.DataSource()

    this.state = {
      dataSource: null,
    };
  }

  componentWillMount() {
    this.setState({ dataSource: this.props.lists });
  }

  componentWillReceiveProps(nextProps) {
    // const oldDataSourceCopy = Object.assign({}, this.state.report);
    this.setState({ dataSource: nextProps.lists });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  // Dispatches action to set the activeList in store
  handleListPress = (item) => {
    this.props.selectList(item.name);
    this.props.navigation.navigate('Todos');
  }

  handleCreatePress = () => {
    this.props.navigation.navigate('CreateList');
    // this.props.navigation.dispatch(resetNavigationStack);
  }

  // renderScrollView = () => {
  //   return this.state.dataSource.map((item, index) => {
  //     return (
  //       <ListItem
  //         key={index}
  //         onPress={() => this.handleListPress(item)}
  //         text={item.name}
  //       />
  //     );
  //   })
  // }

  /*
  FlatList not rerendering on props update. The extraData prop may be solution
  to fixing this but haven't figured it out yet.
  */
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TitleBar text="Todo Lists" canCreate onPress={this.handleCreatePress} />
        {/* <ScrollView>
          {this.renderScrollView()}
        </ScrollView> */}
        <FlatList
          data={this.state.dataSource}
          extraData={this.state.dataSource.length}
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
};

export default connect(mapStateToProps, { selectList })(Lists);
