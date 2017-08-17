import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { addList } from '../actions/user';

import { Container } from '../components/Container';
// import { Input } from '../components/TextInput';
import { CreateText } from '../components/Text';

const styles = EStyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginTop: 15,
  },
  create: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: 'green',
  },
  cancel: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
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
  },
});

class CreateList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    addList: PropTypes.func,
  }
  constructor(props) {
    super(props);

    this.state = {
      listName: null,
    };
  }

  handleCreateList = () => {
    this.props.addList(this.state.listName);
    this.props.navigation.goBack(null);
      // .then(() => this.props.navigation.goBack(null));
  }

  handleCancel = () => {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <Container>
        <CreateText text="Create New List" />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter a list name"
            spellCheck={false}
            onChangeText={text => this.setState({ listName: text })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.create} onPress={this.handleCreateList}>
            <Text style={styles.text}>CREATE</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cancel} onPress={this.handleCancel}>
            <Text style={styles.text}>CANCEL</Text>
          </TouchableHighlight>
        </View>
      </Container>
    );
  }
}

export default connect(null, { addList })(CreateList);
