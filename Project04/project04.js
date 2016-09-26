import React, {Component} from 'react';
import {
  View,Text
} from 'react-native';
import Customer from './components/customer.js'
class Project04 extends Component {
  render(){
    return(
      <View>
        <Greeting name = "Hello"/>
        <Greeting name = "Welcome"/>
        <Customer title="Minh Chien" description="Hello all"/>

        <Customer title="Hoang Nam" description="Hello all"/>
      </View>
    );
  }
}

export default class Greeting extends Component{
  render(){
    return(
      <View style={{backgroundColor:'yellow', padding:10}}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

module.exports = Project04;
