import React, {Component} from 'react';
import{
  View, Text
} from 'react-native';

const Register = require('./components/registerView.js')
const Login = require('./components/loginView.js')
const Root = require('./components/rootView.js')
class Project11 extends Component{
  render(){
    return(
      <View>
        <Root/>
      </View>
    );
  }
}

module.exports = Project11;
