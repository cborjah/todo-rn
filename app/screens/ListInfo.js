import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { editListName, removeList } from '../actions/user';

import { Container } from '../components/Container';
import { BackButton } from '../components/Buttons';

class ListInfo extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    editListName: PropTypes.func,
    list: PropTypes.object,
    userId: PropTypes.string,
    activeListIndex: PropTypes.number,
    removeList: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      listName: null,
      editable: false,
    };
  }

  componentWillMount() {
    // console.log(`in listinfo: ${this.props.list.name}`);
    this.setState({ listName: this.props.list.name });
  }

  // The list name is displayed in a TextInput. This toggles whether the TextInput is editable.
  handleEditPress = () => {
    this.setState((prevState, props) => ({
      editable: !prevState.editable,
    }), () => {
      if (this.state.editable) {
        this.refs.textInput.focus();
      }
    });

    /*
    Check to see if edited listName state is different from the listName passed
    in through the props. If so, update database with new listName.
    */
    const { userId, activeListIndex } = this.props;

    /*
    this.state.listName is changed by the component where as this.props.list.name is
    from the database. Initially the displayed listName is from props. When the list name
    is edited the value of the displayed list name comes from the TextInput. This way
    the component can quickly display the edited value from the state while the
    database is updated in the background to reflect the changes.
    */
    if (this.state.editable && this.state.listName !== this.props.list.name) {
      this.props.editListName(userId, this.state.listName, activeListIndex);
    }
  }

  handleDeletePress = () => {
    const { userId, activeListIndex } = this.props;
    this.props.removeList(userId, activeListIndex);

    // Return to lists screen after deletion
    this.props.navigation.goBack();
  }

  handleBackButtonPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <BackButton onPress={this.handleBackButtonPress} />
        <View style={styles.container}>
          <TextInput
            ref="textInput"
            style={styles.input}
            value={this.state.listName}
            spellCheck={false}
            editable={this.state.editable}
            onChangeText={text => this.setState({ listName: text })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.edit} onPress={this.handleEditPress}>
            <Text style={styles.text}>{this.state.editable ? 'DONE' : 'EDIT'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.delete} onPress={this.handleDeletePress}>
            <Text style={styles.text}>DELETE</Text>
          </TouchableHighlight>
        </View>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginTop: 15,
  },
  completed: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 50,
    backgroundColor: 'green',
  },
  edit: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
  },
  delete: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: 'red',
  },
  container: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 30,
  },
  status: {
    fontSize: 20,
  },
});

const mapStateToProps = state => ({
  list: state.userData.activeList,
  userId: state.userData.userId,
  activeListIndex: state.userData.activeListIndex,
});

export default connect(mapStateToProps, { editListName, removeList })(ListInfo);
