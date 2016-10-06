'use strict'
import React, {Component} from 'react';
import{
  View,
  Text,
  TouchableOpacity ,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  Dimensions
}from 'react-native';

class loginView extends Component{
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }

  render(){
    return(
      <Image
      style={{flex:1}}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/76/1f/c8761f6c880ad26c15a96e3689cf26ec.jpg'}}
       >
      <View style={style.container}>
      <Text style={style.title}>Welcome Friend</Text>

      </View>
      <View style={style.containerButton}>
      <TouchableOpacity onPress={this.navigate.bind(this,'register')} style={style.button}>
        <Text style={style.textButton}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.navigate.bind(this,'login')} style={style.button}>
        <Text style={style.textButton}>Login</Text>
      </TouchableOpacity>
      </View>
      </Image>
    );
  }

}
var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width - 50;
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      padding:30
    },
    containerButton: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      padding:30
    },
    input:{
      width:300,
      height: 50,
      marginTop: 10,
      padding: 4,
      borderWidth: 1,
      borderColor: '#48bbec'
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
      color: 'white'
    },
    title: {
      color:'#48bbec',
      fontSize: 30,
      marginBottom:20
    }
});
module.exports = loginView;
