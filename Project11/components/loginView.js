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
      errors: ""
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

  onBack(routeName){
    this.props.navigator.pop({
      name: routeName,
      passProps: {

      }
    })
  }
  async onLoginPressed(){

        if (this.state.password == "" || this.state.password.length<6) {
            alert("Username & Password can't be blank & Password length >= 6");
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
                   author: jsonResponse['result']['authorities'],
                   errors: jsonResponse['message'],
                   username: jsonResponse['result']['username']
                });

                console.log(this.state.message);

                if (response.status >= 200 && response.status < 300 && jsonResponse['code']==0) {
                    //Handle success
                    let accessToken = res;
                    console.log(this.state.code + " " + this.state.message
                    + " " + this.state.id
                    + " " + this.state.author );
                    //On success we will store the access_token in the AsyncStorage
                  //  this.storeToken(accessToken);
                  if(this.state.author == 1){
                    this.redirect('admin',this.state.username, this.state.message);
                  }else {
                    this.redirect('home',this.state.username, this.state.message);
                  }

                } else {
                    //Handle error
                    alert(this.state.message);

                    let error = this.state.message;
                    throw error;
                }
              } catch(error) {
                  this.setState({error: error});
                  console.log("error " + error);
                 alert("Username or Password is wrong!");
                  this.setState({showProgress: false});
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
       <TouchableOpacity style={style.back} onPress={this.onBack.bind(this,'root')}>
         <Image style={{height:20,width:20}} source={{uri:'http://www.galtane.com/static/img/left.png'}}/>
       </TouchableOpacity>
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

    back: {
      marginTop: 15,
      marginLeft:10,
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
