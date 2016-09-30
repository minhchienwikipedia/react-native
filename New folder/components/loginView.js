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
      email: "",
      password: ""
    };
  }
  redirect(routeName, token){
    this.props.navigator.replace({
      name: routeName,
      passProps: {
        accessToken: token
      }
    })
  }
  onLoginPressed(){
    var pattern =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(this.state.email==""){
      alert("Email can't be blank");
    }else{
      if(pattern.test(this.state.email)==false){
				alert("Email is invalid");
      }else{
        if (this.state.password == "" || this.state.password.length<6) {
            alert("Password can't be blank & length >= 6");
        }else{
          var accessToken = this.state.email + " - "
          + this.state.password;
          this.redirect('home',accessToken);
        }
      }
    }
  }
  render(){
    return(

      <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <TextInput onChangeText={(val) => this.setState({email: val})}
        style={style.input} placeholder="Email"
      />
      <TextInput onChangeText={(val) => this.setState({password: val})}
        style={style.input} placeholder="Password"
        secureTextEntry = {true}
      />
      <Text>{this.state.errors}</Text>

        <TouchableOpacity style={style.button} onPress={this.onLoginPressed.bind(this)}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={this.redirect.bind(this,'root')}>
          <Text style={style.textButton}>Cancel</Text>
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
