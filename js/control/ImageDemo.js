/**
 * Created by 杜鹏程 on 2017/3/27.
 */


import React,{Component} from "react";
import {
    AppRegistry, Image, View, StyleSheet, Text, ScrollView, TouchableHighlight,
    TouchableNativeFeedback, TouchableOpacity
} from "react-native";

export default class FourDemo extends Component{

    render(){
        return(
            <View style={styles.container}>
                {/*<Image
                    style={{width: 100, height: 100}}
                    source={{uri:'22'}}
                />
                <Image
                    style={{width:50,height:50}}
                    source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                />*/}
                    <View style={styles.title_view}>
                        <Text style={styles.title_text}>
                            空间动态
                        </Text>
                    </View>

                <ScrollView ref={(scrollView) => {_scrollView = scrollView;}}>

                <View style={styles.three_image_view}>
                        <View style={styles.vertical_view}>
                            <Image style={{width:50,height:50}}
                                   source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
                            <Text style={styles.top_text}>
                                好友动态
                            </Text>
                        </View>


                        <View style={styles.vertical_view}>
                            <Image
                                style={{width:50,height:50}}
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
                            <Text style={styles.top_text}>
                                附近
                            </Text>
                        </View>
                        <View style={styles.vertical_view}>
                            <Image
                                style={{width:50,height:50}}
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
                            <Text style={styles.top_text}>
                                兴趣部落
                            </Text>
                        </View>
                    </View>
                    <View style={{height:30,backgroundColor:'#f9f9fb'}}/>
                    <TouchableHighlight
                        underlayColor="blue"
                        activeOpacity={0.5}
                        onPress={()=>{
                            console.log('我被点击了');
                        }}
                        >
                        <View style={styles.rectangle_view}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image
                                    source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                    style={{alignSelf:'center',width:30,height:30}}/>
                                <Text style={styles.rectangle_text}>
                                    羽毛球
                                </Text>
                                {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.SelectableBackground()}
                        onPress={()=>{
                            console.log('我被点击了');
                        }}
                    >
                        <View style={styles.rectangle_view}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image
                                    source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                    style={{alignSelf:'center',width:30,height:30}}/>
                                <Text style={styles.rectangle_text}>
                                    火车票
                                </Text>
                            </View>
                                {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>
                    </TouchableNativeFeedback>
                <View style={styles.rectangle_view}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image
                            source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                            style={{alignSelf:'center',width:30,height:30}}/>
                        <Text style={styles.rectangle_text}>
                            飞机票
                        </Text>
                        {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                    </View>

                </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                汽车票
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                轮船票
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                高铁票
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                旅游票
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                出入证
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                身份证
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                学生证
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                房产证
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                驾驶证
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                行驶证
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image
                                source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                                style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}>
                                结婚证
                            </Text>
                            {/*<Image source={require('./img/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>*/}
                        </View>

                    </View>
                </ScrollView>

                <TouchableOpacity
                    activeOpacity={0.2}
                    style={styles.button}
                    onPress={()=>{_scrollView.scrollTo({y:0});}}
                >
                    <Text>让我滚回去(注意看按压时透明的改变)</Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    title_view:{
        height:50,
        backgroundColor:'#27b5ee',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    title_text:{
        fontSize:20,
        color:'white',
        textAlign:'center'
    },
    three_image_view:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
        paddingTop:15,
    },
    vertical_view:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingBottom:15,
    },
    top_text:{
        marginTop:5,
        color:'black',
        fontSize:16,
        textAlign:'center',
    },
    rectangle_view:{
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomColor:'#dedfe0',
        borderBottomWidth:1,
    },
    rectangle_text:{
        color:'black',
        fontSize:16,
        textAlign:'center',
        paddingLeft:8,
    },
    button:{
        margin:7,
        padding:5,
        alignItems:'center',
        backgroundColor:'#eaeaea',
        borderRadius:3,
    },
});