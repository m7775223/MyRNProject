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
                    <Text style={styles.title_text}>
                        新闻详情
                    </Text>
                </View>
                <View style={styles.source_view}>
                    <Text style={styles.source_text}>
                        纽约时报中文网
                    </Text>
                    <Text style={styles.source_text}>
                        四小时前
                    </Text>
                </View>
                <Text style={styles.content_title_text}>
                    孙悟空用金箍棒画圈保护唐僧 为何只画了一次就再也不画了
                </Text>
                <Text style={styles.content_text}>
                    因为他很清楚，唐僧没坐性，俗称坐不住。孙悟空画了圈，必须唐僧坐在里面才能有效果，但是事实证明，想让唐僧安安静静地坐在那里做个美男子是绝对不可能的事。正因如此，孙悟空才知道，自己即使画了也是白画，又何必多此一举呢？
                </Text>

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
    source_view:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:20,
        marginTop:10,
        alignItems:'center',
    },
    source_text:{
        color:'#b1b1b1',
        fontSize:14,
        marginLeft:25,
        marginRight:25,
    },
    content_title_text:{
        fontSize:20,
        color:'#343434',
        marginTop:8,
        marginLeft:25,
        marginRight:25,
        textAlign:'left',
    },
    content_text:{
        color:'#b2b2b2',
        fontSize:16,
        marginTop:12,
        marginLeft:25,
        marginRight:25,
        textAlign:'left'
    }
});