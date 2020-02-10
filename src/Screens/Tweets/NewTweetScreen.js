import React, {Component} from './node_modules/react';
import {View, Button, TextInput} from 'react-native';

export default class NewTweetScreen extends Component {
  render() {
    return (
      <View>
        <TextInput />
        <Button title="test">test</Button>
      </View>
    );
  }
}
