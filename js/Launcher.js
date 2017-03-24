/**
 * Created by 杜鹏程 on 2017/3/22.
 */


import React,{Component} from "react";
import {AppRegistry, StyleSheet,Text, TextInput, View} from "react-native";


let Dimensions = require('Dimensions');
let totalwidth = Dimensions.get('window').width;
let leftStartPoint = totalwidth * 0.1;
let componentWidth = totalwidth * 0.8;

export default class Root extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputedNum:'',
            inputedPW: '',
        };
        // this.inputedNum = this.inputedNum.bind(this);
        // this.inputedPW = this.inputedPW.bind(this);
    }
    updateNum(newText){
        this.setState((state) => {
            return{
                inputedNum:newText
            };
        });
    }
    updatePW(newText){
        this.setState((state) => {
            return{
                inputedPW:newText
            };
        });
    }


    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                    placeholder={'请输入用户名'}
                    onchangetext={(newText) => this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的账号:{this.state.inputedNum}
                </Text>
                <TextInput style={styles.passwordInputStyle}
                    placeholder={'请输入密码'}
                    password = {true}
                    onchangetext={(newText) => this.updatePW(newText)}/>
                <Text style={styles.bigTextPrompt}>
                    登 录
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:'white',
    },
    numberInputStyle:{
        top:20,
        left:leftStartPoint,
        width: componentWidth,
        fontSize: 16,
    },
    textPromptStyle:{
        top: 30,
        left: leftStartPoint,
        width: componentWidth,
        fontSize: 16,
    },
    passwordInputStyle: {
        top:50,
        left:leftStartPoint,
        width: componentWidth,

        fontSize: 16,
    },
    bigTextPrompt:{
        top: 70,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: '#0080ff',
        color:'white',
        textAlign: 'center',
        fontSize: 30,
    }
});