/**
 * Created by 杜鹏程 on 2017/3/24.
 */


import React,{Component} from "react";
import { AppRegistry,StyleSheet,Text, View} from "react-native";


export default class TwoDemo extends Component{
    render(){
        return(
            /*<View style={{flexDirection:'row',height:100,padding:20}}>
                <View style={{backgroundColor:'blue', flex:0.3}}/>
                <View style={{backgroundColor:'yellow', flex:0.5}}/>
                <Text>Hello World!</Text>
            </View>*/
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <Text>
                        新闻详情
                    </Text>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white',
    },
    title_view:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#27b5ee',
        justifyContent:'center',
        alignItems:'center',
    },
    title_text:{
      color:'white',
      fontSize:22,
      textAlign:'center',
    },

});