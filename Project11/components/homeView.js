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

const ACCESS_TOKEN = 'access_token';

class homeView extends Component{
  constructor(props){
    super(props);
    this.state={
      accessToken: this.props.accessToken,
      message: this.props.message,
      rovers: []
    }
  }

  navigate(routeName){
    this.props.navigator.replace({
      name: routeName
    })
  }


  render(){
    return(
      <Image
      style={{flex:1}}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/76/1f/c8761f6c880ad26c15a96e3689cf26ec.jpg'}}
       >
      <View style={style.container}>
        <Text style={style.title}>Hello Friend</Text>
        <Text style={style.text}>You are {this.state.accessToken}  {this.state.message}</Text>

        <TouchableOpacity onPress={this.navigate.bind(this,'root')} style={style.button}>
          <Text style={style.textButton}>Logout</Text>

        </TouchableOpacity>
      </View>
      </Image>
    );
  }

}

var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width;

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
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
});
module.exports = homeView;
