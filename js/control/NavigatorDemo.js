/**
 * Created by 杜鹏程 on 2017/3/27.
 */


import React,{Component} from "react";
import {Navigator, Text, TouchableHighlight} from "react-native";

export default class SevenDemo extends Component{
    render(){
        const routes =[
            {title:'First Scene',index:0},
            {title:'Second Scene',index:1},
        ];
        return(
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route,navigator) =>
                    <TouchableHighlight
                        onPress={()=>{
                            if(route.index === 0){
                                navigator.push(routes[1]);
                            }else {
                                navigator.pop();
                            }
                        }}
                    >
                        <Text>Hello{route.title}!</Text>
                    </TouchableHighlight>
                }
                style={{padding:100}}
            />
        );
    }
}