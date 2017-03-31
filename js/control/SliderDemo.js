/**
 * Created by 杜鹏程 on 2017/3/28.
 */


import React,{Component} from "react";
import {AppRegistry,Slider, View, StyleSheet,Text} from "react-native";

export default class FifteenDemo extends Component{
    state={
        slideCompletionValue:50,
    };
    render(){
        return(
            <View style={styles.container}>
                <Slider
                    style={{width:200}}
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    value={50}
                    onSlidingComplete={(value)=>this.setState({slideCompletionValue:value})}
                >

                </Slider>
                <Text style={{backgroundColor:'#00ff21'}}>
                    选择的值:{this.state.slideCompletionValue}
                </Text>
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