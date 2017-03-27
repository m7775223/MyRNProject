/**
 * Created by 杜鹏程 on 2017/3/27.
 */


import React,{Component} from "react";
import {StyleSheet, ListView, Text, TouchableHighlight, View, Image} from "react-native";


export default class FiveDemo extends Component{

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state = {
            // dataSource:ds.cloneWithRows(['row1','row2']),
            dataSource:ds.cloneWithRows(this._genRows(-1))
        };
    }
    _genRows(flag){
        const dataBlob = [];
        for (let i = 0;i<88; i++){
            if(i == flag){
                dataBlob.push("上海浦东新区+张江润和国际总部"+i);
            }else {
                dataBlob.push("上海浦东新区"+i);
            }
        }
        return dataBlob;
    }

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                // renderRow={(rowData) => <Text>{rowData}</Text>}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }

    _renderRow(rowData,sectionID,rowID){
        return(
          <TouchableHighlight
              onPress={()=>{
                  this._pressRow(rowData,rowID);
              }}
              underlayColor='#27be5f'
          >
              <View>
                  <View style={styles.row}>
                      <Image style={{width:40,height:40}}
                        source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
                      <Text style={{flex:1,fontSize:20,marginLeft:20}}>
                          {rowData}
                      </Text>
                  </View>
              </View>
          </TouchableHighlight>
        );
    }

    _pressRow(rowData,rowID){
        alert(rowData);
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(
          this._genRows(rowID)

        )});
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },


});