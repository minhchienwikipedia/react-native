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
  redirect(routeName, token, message){
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

  async onRegisterPressed(){
    var pattern =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pattern2 = /^([a-zA-Z0-9_\.\-])+\+([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      // check value
      if (this.state.email == "") {
        alert("Email can't be blank");

      }else{

        if(pattern.test(this.state.email)==false){
  				alert("Email is invalid");

        }else{
          if (this.state.name == "") {
            alert("Name can't be blank");

          }else{
            if (this.state.password == "" || this.state.password.length<6) {
                alert("Password can't be blank & length >= 6");

            }else{

              if (this.state.password_confirmation == "") {
                  alert("Confirm Password can't be blank");

              }else{
                if (this.state.password_confirmation != "") {
                    if (this.state.password_confirmation != this.state.password) {
                        alert("Passwords do not match");

                    }else {
                      let formdata = new FormData();
                      formdata.append("username", this.state.name);
                      formdata.append("password", this.state.password);
                      formdata.append("email", this.state.email);
                      try {
                        let response = await fetch('http://chienduong.esy.es/api/register.php',{
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
                           result: jsonResponse['result']

                        });


                        if (response.status >= 200
                          && response.status < 300
                          && jsonResponse['code']==0) {
                            // show alert & moving screen
                            alert(this.state.message);
                            this.redirect('home',this.state.result, this.state.message);
                        } else {
                            //Handle error
                            alert(this.state.message);
                            let error = res;
                            throw error;
                        }
                      } catch(error) {
                          alert("Something wrong. Please try again.!");
                      }
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
      <Image
      style={{flex:1}}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/76/1f/c8761f6c880ad26c15a96e3689cf26ec.jpg'}}
       >
       <ScrollView>
       <TouchableOpacity style={style.back} onPress={this.onBack.bind(this,'root')}>
         <Image style={{height:20,width:20}} source={{uri:'http://www.galtane.com/static/img/left.png'}}/>
       </TouchableOpacity>
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
        <TouchableOpacity style={style.button} onPress={this.onRegisterPressed.bind(this,'home')}>
          <Text style={style.textButton}>Register</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
      </Image>
    );
  }

}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingLeft:30,
      paddingRight:30
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
module.exports = registerView;
