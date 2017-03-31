/**
 * Created by 杜鹏程 on 2017/3/28.
 */

import React,{Component} from "react";
import {TextInput, View,StyleSheet,KeyboardAvoidingView} from "react-native";


export default class FourteenDemo extends Component{

    state={
        behavior:'padding',
    };
    render(){
        return(
          <View style={styles.container}>
              <KeyboardAvoidingView behavior="padding" style={styles.container}>
                  <TextInput
                    underlineColorAndroid={'#ffffff'}
                    placeholder="这里是一个简单的输入框"
                    style = {styles.textInput}
                  />

              </KeyboardAvoidingView>

          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingTop:20,
    },
    textInput:{
        borderRadius:5,
        borderWidth:1,
        height:140,
        paddingHorizontal:10,
    },
});