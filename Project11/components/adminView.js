'use strict'
import React, {Component} from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  ListView,
  Dimensions
}from 'react-native';

const ACCESS_TOKEN = 'access_token';
const REQUEST_URL = 'http://chienduong.esy.es/api/listuser.php'
class adminView extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2}),
      accessToken: this.props.accessToken,
      message: this.props.message,
      rovers: []
    }
  }
  componentDidMount(){
    this.fetchData();
  }

  async fetchData() {
    try {
      let response = await fetch(REQUEST_URL);
      let responseJson = await response.json();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson.result)
      });
    } catch(error) {
      console.error(error);
    }
  }
  navigate(routeName){
    this.props.navigator.replace({
      name: routeName
    })
  }

  renderData(data){
    return(
      <TouchableOpacity onPress={()=>this.onItemPressed(data)}>

      <View style={style.listview}>
        <Text style={style.id}>ID: {data.id}</Text>
        <Text style={style.username}>Username: {data.username}</Text>

      </View>
      </TouchableOpacity>
    )
  }

  onItemPressed(data){
    this.props.navigator.push({
      name: 'info',
      passProps: {
        data: data
      }
    });
  }

  render(){
    return(
      <Image
      style={{flex:1}}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/76/1f/c8761f6c880ad26c15a96e3689cf26ec.jpg'}}
       >
      <View style={style.container}>
        <Text style={style.title}>Hello {this.state.accessToken}</Text>
        <Text style={style.text}> {this.state.message}</Text>
        <ListView
          style={{flex:1}}
          dataSource={this.state.dataSource}
          renderRow={this.renderData.bind(this)}
        />
        <TouchableOpacity onPress={this.navigate.bind(this,'add')} style={style.button}>
          <Text style={style.textButton}>Add User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigate.bind(this,'root')} style={style.button}>
          <Text style={style.textButton}>Logout</Text>
        </TouchableOpacity>
      </View>
      </Image>
    );
  }

}

var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width;

const style = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      padding:30
    },
    id: {
      fontSize: 20,
      marginTop: 8,
      color: 'red'
    },
    username: {
      color: '#48bbec'
    },
    listView: {
      flex: 1
    },
    title: {
      color:'#48bbec',
      fontSize: 30,
      marginBottom:20
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      width:300,
      height:50,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    textButton: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
});
module.exports = adminView;
