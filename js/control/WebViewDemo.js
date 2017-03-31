/**
 * Created by 杜鹏程 on 2017/3/28.
 */


import React,{Component} from "react";
import {StyleSheet,Text, TouchableOpacity, View,WebView} from "react-native";


WEBVIEW_REF = 'webview';
export default class SixteenDemo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <TouchableOpacity
                        onPress={this.goBack.bind(this)}>
                        <Text style={styles.title_text}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.title_text}>
                        简书
                    </Text>
                    <TouchableOpacity
                        onPress={this.goForward.bind(this)}>
                        <Text style={styles.title_text}>
                            前进
                        </Text>
                    </TouchableOpacity>
                </View>
                <WebView
                    ref={WEBVIEW_REF}
                    source={{uri:'http://www.jianshu.com/u/f29996f3e0f8'}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    automaticallyAdjustContentInsets={true}
                />

            </View>
        );
    }
    goBack(){
        this.refs[WEBVIEW_REF].goBack();
    }

    goForward(){
        this.refs[WEBVIEW_REF].goForward();
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    title_view:{
        height:50,
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#27b5ee',
    },
    title_text:{
        color:'white',
        fontSize:22,
        textAlign:'center'
    },
});