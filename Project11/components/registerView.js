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

class registerView extends Component{
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

  onRegisterPressed(){
    var pattern =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pattern2 = /^([a-zA-Z0-9_\.\-])+\+([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      // check giá trị
      if (this.state.email == "") {
        alert("Email can't be blank");

      }else{

        if(pattern.test(this.state.email)==false){
  				alert("Email is invalid");

        }else{
          if (this.state.name == "") {
            alert("Name can't be blank");

          }else{
            if (this.state.password == "" || this.state.password.length<=6) {
                alert("Password can't be blank & length >= 6");

            }else{

              if (this.state.password_confirmation == "") {
                  alert("Confirm Password can't be blank");

              }else{
                if (this.state.password_confirmation != "") {
                    if (this.state.password_confirmation != this.state.password) {
                        alert("Passwords do not match");

                    }else {
                      alert("OK");
                    }
                }
              }
            }
          }
        }

      }



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
        style={style.input} placeholder="Password"
        secureTextEntry = {true}
      />
      <TextInput onChangeText={(val) => this.setState({password_confirmation: val})}
        style={style.input} placeholder="Confirm Password"
        secureTextEntry = {true}
      />
      <Text>{this.state.errors}</Text>

        <TouchableOpacity style={style.button} onPress={this.onRegisterPressed.bind(this)}>
          <Text style={style.textButton}>Register</Text>
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
      marginTop: 30,
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
module.exports = registerView;
