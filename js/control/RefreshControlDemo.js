/**
 * Created by 杜鹏程 on 2017/3/27.
 */


import React,{Component} from "react";
import {StyleSheet, ListView, Text, TouchableHighlight, View, Image, RefreshControl} from "react-native";


export default class SixDemo extends Component{

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state = {
            isRefreshing:false,
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
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        colors={['#ff0000','#00ff00','#0000ff']}
                        progressBackgroundColor="#ffff00"
                        enabled={true}
                    />
                }
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

    _refreshRows(){
        const dataBlob = [];
        for(let i = 0; i<8;i++){
            dataBlob.push("明天就放假了");
        }
        return dataBlob;
    }

    _onRefresh(){
        this.setState({isRefreshing:true});
        setTimeout(()=>{
            this.setState({
               isRefreshing:false,
                dataSource:this.state.dataSource.cloneWithRows(this._refreshRows())
            });
        },3000);
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