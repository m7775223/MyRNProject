/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyRNProject extends Component {
  render() {
    return (
      <View>
          <Text>我是ios</Text>
          <Text>我是阿杜</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyRNProject', () => MyRNProject);
