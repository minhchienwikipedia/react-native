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

class infoView extends Component{
  constructor(props){
    super(props);
    console.log(this.props.data);
    this.state={
      data: this.props.data
    }
  }

  redirect(routeName, token,message){
    this.props.navigator.pop({
      name: routeName,
      passProps: {
        accessToken: token,
        message: message
      }
    })
  }

  render(){
    return(
      <Image
      style={{flex:1}}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/76/1f/c8761f6c880ad26c15a96e3689cf26ec.jpg'}}
       >
      <View style={style.container}>
        <Text style={style.title}>Welcome Friend</Text>
        <Text>Id: {this.state.data.id}</Text>
        <Text>Email: {this.state.data.email}</Text>
        <Text>Username: {this.state.data.username}</Text>
        <Text>Password: {this.state.data.password}</Text>
        <Text>Authorities: {this.state.data.authorities}</Text>
        <TouchableOpacity style={style.button}   onPress={this.redirect.bind(this,'admin')}>
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
module.exports = infoView;
