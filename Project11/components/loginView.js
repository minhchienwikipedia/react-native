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
  Dimensions,
  ScrollView
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
  redirect(routeName, token,message){
    this.props.navigator.replace({
      name: routeName,
      passProps: {
        accessToken: token,
        message: message
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
              formdata.append("username", this.state.username);
              formdata.append("password", this.state.password);
              try {
                let response = await fetch('http://chienduong.esy.es/api/login.php', {
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
                   id: jsonResponse['result']['id'],
                   author: jsonResponse['result']['authorities']
                });



                if (response.status >= 200 && response.status < 300 && jsonResponse['code']==0) {
                    //Handle success
                    let accessToken = res;
                    console.log(this.state.code + " " + this.state.message
                    + " " + this.state.id
                    + " " + this.state.author );
                    //On success we will store the access_token in the AsyncStorage
                  //  this.storeToken(accessToken);
                  if(this.state.author == 1){
                    this.redirect('admin',this.state.id, this.state.message);
                  }else {
                    this.redirect('home',this.state.id, this.state.message);
                  }

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
      <Image
      style={{flex:1}}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/76/1f/c8761f6c880ad26c15a96e3689cf26ec.jpg'}}
       >
       <ScrollView>
      <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <TextInput onChangeText={(val) => this.setState({username: val})}
        style={style.input} placeholder="Username"
      />
      <TextInput onChangeText={(val) => this.setState({password: val})}
        style={style.input} placeholder="Password"
        secureTextEntry = {true}
      />

        <TouchableOpacity style={style.button} onPress={this.onLoginPressed.bind(this)}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={this.redirect.bind(this,'root')}>
          <Text style={style.textButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </Image>
    );
  }

}
var w = Dimensions.get('window').width - 50;
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
      borderColor: 'white'
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
