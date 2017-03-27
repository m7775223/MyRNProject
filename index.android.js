/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';


import Launcher from "./js/Launcher";
import FlexboxDemo from "./js/control/FlexboxDemo";
import ViewAndTextDemo from "./js/control/ViewAndTextDemo";
import TextInputDemo from "./js/control/TextInputDemo";
import ImageDemo from "./js/control/ImageDemo";
import ListViewDemo from "./js/control/ListViewDemo";
import RefreshControlDemo from "./js/control/RefreshControlDemo";
import NavigatorDemo from "./js/control/NavigatorDemo";


// AppRegistry.registerComponent('MyRNProject', () => FlexboxDemo);
// AppRegistry.registerComponent('MyRNProject', () => ViewAndTextDemo);
// AppRegistry.registerComponent('MyRNProject', () => TextInputDemo);
// AppRegistry.registerComponent('MyRNProject', () => ImageDemo);
// AppRegistry.registerComponent('MyRNProject', () => ListViewDemo);
// AppRegistry.registerComponent('MyRNProject', () => RefreshControlDemo);
AppRegistry.registerComponent('MyRNProject', () => NavigatorDemo);
