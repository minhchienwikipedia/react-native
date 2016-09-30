'use strict'
import React, {Component} from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  TextInput
}from 'react-native';

const ACCESS_TOKEN = 'access_token';
class homeView extends Component{
  constructor(props){
    super(props);
    this.state={
      accessToken: this.props.accessToken,
      rovers: []
    }
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
        <Text style={style.text}>You are {this.state.accessToken}</Text>

        <TouchableOpacity onPress={this.navigate.bind(this,'root')} style={style.button}>
          <Text style={style.textButton}>Logout</Text>

        </TouchableOpacity>
      </View>
    );
  }

}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding:30
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
      width:200,
      height:30,
      backgroundColor: '#3498db',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 10
    },
});
module.exports = homeView;
