/**
 * Created by 杜鹏程 on 2017/3/24.
 */

import React, {Component} from "react";
import {AppRegistry,View} from "react-native";


export default class OneDemo extends Component{
    render(){
        return(
            //固定尺寸
            //最简单的设置组件的尺寸的方法就是通过添加一个固定的宽度和高度。
            // 所有尺寸大小在React Native没有单位的,代表着独立的像素密度。
          /*<View>
              <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
              <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
              <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
          </View>*/

            //弹性宽高
            /*<View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'powderblue'}}/>
                <View style={{flex:2,backgroundColor:'skyblue'}}/>
                <View style={{flex:3,backgroundColor:'steelblue'}}/>
            </View>*/

            //使用flexDirection、alignItems和 justifyContent三个样式属性就已经能够实现我们所需的布局。
            // Try setting `flexDirection` to `column`.
            /*<View style={{flex:1,flexDirection:'row'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
            </View>*/

            //JustifyContent
            // Try setting `justifyContent` to `center`.
            // Try setting `flexDirection` to `row`.
            /*<View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'space-between',
            }}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
            </View>*/

            //AlignItems
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}