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


// AppRegistry.registerComponent('MyRNProject', () => FlexboxDemo);
// AppRegistry.registerComponent('MyRNProject', () => ViewAndTextDemo);
AppRegistry.registerComponent('MyRNProject', () => TextInputDemo);
