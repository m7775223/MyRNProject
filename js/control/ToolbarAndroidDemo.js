/**
 * Created by 杜鹏程 on 2017/3/28.
 */



import React, {Component} from "react";
import { AppRegistry,StyleSheet,Text, View,TextInput} from "react-native";


var ToolbarAndroid = require('ToolbarAndroid');
var toolbarActions = [
    {title:'weibo',icon:require('../../img/weibo.png'),show:'always'},
    {title:'React-Native'},
    {title:'blog',icon:require('../../img/diqiu.png'),show:'always'},
];

export default class EightDemo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ToolbarAndroid
                    actions={toolbarActions}
                    navIcon={require('../../img/caidan.png')}
                    logo={require('../../img/181btn_ren.png')}
                    style={styles.toolbar}
                    subtitle="上海市浦东新区"
                    titleColor="#ffffff"
                    title="米度测控"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'white',
   },
    toolbar:{
       backgroundColor:'#c6c5b9',
        height:56,
    },
});