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
    this.props.navigator.replace({
      name: routeName
    })
  }

  render(){
    return(

      <View style={style.container}>
      <Text style={style.title}>Welcome Friend</Text>
        <TouchableOpacity onPress={this.navigate.bind(this,'register')} style={style.button}>
          <Text style={style.textButton}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigate.bind(this,'login')} style={style.button}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

}
var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width - 30;
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:30
    },
    input:{
      width:300,
      height: 50,
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48bbec'
    },
    button: {
      width:w,
      height:30,
      backgroundColor: '#3498db',
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
