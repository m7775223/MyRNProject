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
          <Text>Hello World!</Text>
          <Text>我是程序员杜鹏程</Text>
      </View>
      
    );
  }
}

AppRegistry.registerComponent('MyRNProject', () => MyRNProject);
