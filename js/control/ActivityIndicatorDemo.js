/**
 * Created by 杜鹏程 on 2017/3/28.
 */


import React,{Component} from "react";
import {ActivityIndicator, View,StyleSheet} from "react-native";


export default class TenDemo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator
                    size='large'
                    color="#0000ff"
                />
                <ActivityIndicator
                    style={{marginTop:30}}
                    size="small"
                    color="#ff00ff"
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
});