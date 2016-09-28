'use strict'
import React, {Component} from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
}from 'react-native';

class loginView extends Component{
  render(){
    return(
      <Image style={style.container} source={{uri: 'https://images.unsplash.com/photo-1453781382334-20f5dfb0fb2e?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb'}}>
      <View style={style.container}>

      <Text style={style.title}>SuperHero</Text>
        <TouchableOpacity style={style.button} onPress={(this.onLogin.bind(this))}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
      </Image>
    );
  }

  onLogin(){
    Alert.alert(
      'Login',
      'Authority',
      [
        {
          text: 'Admin',
          onPress: (this.admin.bind(this))
        },
        {

            text: 'Customer',
            onPress: (this.customer.bind(this))
        }
      ]
    );
  }

  admin(){
    this.props.navigator.replace({
      title: 'Dashbroad',
      name: 'Dashbroad',
      passProps: {}
    });
  }

  customer(){
    console.log('Customer');
  }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding:30
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
      color:'white',
      fontSize: 30,
      marginTop:50
    }
});
module.exports = loginView;
