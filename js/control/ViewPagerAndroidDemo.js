/**
 * Created by 杜鹏程 on 2017/3/28.
 */


import React,{Component} from "react";
import {AppRegistry,StyleSheet,Image, Text, TouchableOpacity, View, ViewPagerAndroid} from "react-native";

var PAGES = 2;
var IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
];
export default class ElevenDemo extends Component{

    state = {
        page:0,
    };
    render(){
        var pages = [];
        for(let i=0;i<PAGES;i++){
            pages.push(
                <View key={i} collapsable={false}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.onPress}>
                        <Image
                            style={styles.image}
                            source={{uri:IMAGE_URIS[i]}}>

                        </Image>
                    </TouchableOpacity>
                </View>
            );
        }
        return(

            <View style={styles.container}>
                <ViewPagerAndroid style={styles.viewPager}
                    initialPage={0}
                    onPageSelected={this.onPageSelected}>
                    {pages}
                </ViewPagerAndroid>
                <Text style={{flex:1,alignSelf:'center'}}>当前第{this.state.page+1}页</Text>
            </View>
        );
    }
    onPageSelected=(e)=>{
        this.setState({page:e.nativeEvent.position});
    }
    onPress =()=>{
        alert('第'+(this.state.page+1)+'页被点击了');
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#f5fcff',
   },
    image:{
       height:200,
        padding:20,
    },
    viewPager:{
       flex:1,
    },
});