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
      password: "",
      message: ""
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
  async onLoginPressed(){


    if(this.state.username==""){
      alert("Email can't be blank");
    }else{

        if (this.state.password == "" || this.state.password.length<6) {
            alert("Password can't be blank & length >= 6");
        }else{

              let formdata = new FormData();
              formdata.append("TaiKhoan", this.state.username);
              formdata.append("MatKhau", this.state.password);
              try {
                let response = await fetch('http://4ship.esy.es/api/dangnhap_shipper.php', {
                  method: 'post',
                  headers: {
                  'Content-Type': 'multipart/form-data',
                  },
                  body: formdata

                });
                let res = await response.text();
                var jsonResponse = JSON.parse(res);
                this.setState({
                  code: jsonResponse['code'],
                   message: jsonResponse['message'],
                   result: jsonResponse['result'],
                   PK_ShipperID: jsonResponse['result']['PK_ShipperID']
                });



                if (response.status >= 200 && response.status < 300 && jsonResponse['code']==0) {
                    //Handle success
                    let accessToken = res;
                    console.log(this.state.code + " " + this.state.message + " " + this.state.PK_ShipperID);
                    //On success we will store the access_token in the AsyncStorage
                  //  this.storeToken(accessToken);
                    this.redirect('home',this.state.PK_ShipperID);
                } else {
                    //Handle error
                    let error = res;
                    throw error;
                }
              } catch(error) {
                  this.setState({error: error});
                  console.log("error " + error);
                  this.setState({showProgress: false});
              }
        }

    }

  }
  render(){
    return(

      <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <TextInput onChangeText={(val) => this.setState({username: val})}
        style={style.input} placeholder="Username"
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
