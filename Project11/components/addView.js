'use strict'
import React, {Component} from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image
}from 'react-native';

class addView extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      authorities: "",
      errors: []
    };
  }
  redirect(routeName){
    this.props.navigator.replace({
      name: routeName,
      passProps: {

      }
    })
  }
  async onRegisterPressed(){
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
                      if(this.state.authorities!=0 && this.state.authorities!=1){
                        alert("Authorities is only filled 0(user) or 1(admin)");

                      }else{

                        let formdata = new FormData();
                        formdata.append("username", this.state.name);
                        formdata.append("password", this.state.password);
                        formdata.append("email", this.state.email);
                        formdata.append("authorities", this.state.authorities);
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
                              //Handle success
                              let accessToken = res;
                              console.log(this.state.code
                                + " " + this.state.message
                              + " " + this.state.result);
                              //On success we will store the access_token in the AsyncStorage
                            //  this.storeToken(accessToken);
                            alert(this.state.message);
                              this.redirect('admin');
                          } else {
                              //Handle error
                              alert(this.state.message);
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
      <View style={style.container}>
        <Text style={style.title}>Add User</Text>
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
        <TextInput onChangeText={(val) => this.setState({authorities: val})}
          style={style.input} placeholder="Authorities ('0'-user or '1'-admin)"
        />
        <TouchableOpacity style={style.button}
        onPress={this.onRegisterPressed.bind(this)}>
          <Text style={style.textButton}>Add</Text>

        </TouchableOpacity>
        <TouchableOpacity style={style.button}
        onPress={this.redirect.bind(this,'admin')}>
          <Text style={style.textButton}>Back</Text>

        </TouchableOpacity>
      </View>
      </Image>
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
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
});
module.exports = addView;
