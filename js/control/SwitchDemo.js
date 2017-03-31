/**
 * Created by 杜鹏程 on 2017/3/28.
 */


import React,{Component} from "react";
import {Switch, View,StyleSheet} from "react-native";


export default class NineDemo extends Component{

    state = {
        colorTrueSwitchIsOn:true,
        colorFalseSwitchIsOn:false,
    };

    render(){
        return(
            <View style={styles.container}>
                <Switch
                    onValueChange={(value) => this.setState({colorFalseSwitchIsOn:value})}
                    style={{marginBottom:10}}
                    value={this.state.colorFalseSwitchIsOn}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    instructions:{
      textAlign:'center',
        color:'#333333',
        marginBottom:5,
    },
});