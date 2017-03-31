/**
 * Created by 杜鹏程 on 2017/3/27.
 */


import React,{Component} from "react";
import {AppRegistry,StyleSheet,Image, Navigator, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";


NavigationBarRouteMapper = {
    LeftButton(route,navigator,index,navState) {
        if (route.id === 'first') {
            return null;
        }
        previousRoute = navState.routeStack[index - 1];
        return (
          <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.navbarLeftButton}>
              <Image style={styles.backImage}
                     source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490675824219&di=45e11ffaa2c0c2c5b249d1778f5dac9d&imgtype=0&src=http%3A%2F%2Fm.qqzhi.com%2Fupload%2Fimg_0_2679158030D2163567386_23.jpg'}}/>
          </TouchableOpacity>
        );
    },

    RightButton(route, navigator ,index ,navState){
      if(route.id === 'second'){
          return null;
      }
      return(
          <TouchableOpacity
              onPress={()=> navigator.push({id:'second',title:'第二页',data:'我是从第一页跳转过来的'})}
              style={styles.navBarRightButton}
          >
              <Text style={[styles.navBarButtonText]}>
                  下一页
              </Text>
          </TouchableOpacity>
      );
    },

    Title(route,navigator,index,navState) {
        return(
          <Text style={[styles.navBarTitleText]}>
              {route.title}
          </Text>
        );
    },

};


export default class SevenDemo extends Component{


    render(){
        return(
          <Navigator
              renderScene={this.renderNav}
              style={styles.container}
              initialRoute={{id:"first",title:"第一页"}}
              configureScene={(route,routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
              navigationBar={
                  <Navigator.NavigationBar
                    routeMapper ={ NavigationBarRouteMapper}
                    style={{backgroundColor:'white'}}
                  />
              }
          />
        );
    }
    renderNav(route,nav){
        switch (route.id){
            case 'first':
                return <FirstScreen navigator = {nav} title = "第一页"/>;
            case 'second':
                return (<SecondScreen navigator = {nav} title = "第二页" data={route.data}/>);
        }
    }

}

class FirstScreen extends Component {
    toSecond = ()=>{
        this.props.navigator.push({id:"second",title:"第二页",data:"我是第二页"});
    }
    render(){
        return(
          <View style={styles.firstView}>
              <TouchableHighlight
                style={{padding:10}}
                onPress={this.toSecond}
                underlayColor="blue"
              >
                  <Text style={styles.contentText}>第一页</Text>

              </TouchableHighlight>
          </View>
        );
    }
}

class SecondScreen extends Component{
    toFirst=()=>{
        this.props.navigator.pop();
    }
    render(){
        return (
            <View style={styles.secondView}>
                <TouchableHighlight
                    onPress={this.toFirst}
                    style={{padding:10}}
                    underlayColor="#00ff00"
                >
                    <Text style={styles.contentText}>{this.props.data}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBarLeftButton :{
        paddingLeft:10,
        paddingTop:15,
    },
    backImage:{
      width:50,
      height:50,

    },
    navBarTitleText:{
      color:'black',
      fontWeight:'500',
      marginTop:20,
    },

    navBarRightButton:{
        paddingRight:10,
        paddingTop:20,
    },
    navBarButtonText:{
        color:'#5890ff',
    },
    container:{
        flex:1,
    },
    firstView:{
        flex:1,
        backgroundColor:'#5ac4ef',
        justifyContent:'center',
    },
    secondView:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#00ff00',
    },
    contentText:{
        fontSize:22,
        color:'white',
        textAlign:'center',
    },

});