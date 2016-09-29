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

class loginView extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: []
    };
  }

  render(){
    return(

      <View style={style.container}>
      <Text style={style.title}>Register</Text>
      <TextInput onChangeText={(val) => this.setState({email: val})}
        style={style.input} placeholder="Email"
      />
      <TextInput onChangeText={(val) => this.setState({name: val})}
        style={style.input} placeholder="Name"
      />
      <TextInput onChangeText={(val) => this.setState({password: val})}
        style={style.input} placeholder="Pass Word"
        secureTextEntry = {true}
      />
      <TextInput onChangeText={(val) => this.setState({password_confirmation: val})}
        style={style.input} placeholder="Confirm Password"
        secureTextEntry = {true}
      />
      <Text>{this.state.email}</Text>

        <TouchableOpacity style={style.button} >
          <Text style={style.textButton}>Login</Text>
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
      width:200,
      height:30,
      backgroundColor: '#3498db',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 60,
      marginBottom: 10
    },
    textButton: {
      color: 'white'
    },
    title: {
      color:'#48bbec',
      fontSize: 30
    }
});
module.exports = loginView;
