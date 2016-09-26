
// Step 01: Import library

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Step 02: Write code class (Component): RENDER

class Project01 extends Component {
  constructor(props){
    super(props);
    console.log("Constructor");
  }

  render() {

    console.log("render");
    return (
      <View style={style.view}>
        <Text style={style.title} >PROJECT 01 </Text>
        <Text style={style.description} >Style in Project</Text>
      </View>
    );
  }
}

var style = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
    color: 'white'

  },
  description: {
    color: 'red'
  },
  view: {
    backgroundColor: 'pink',
    width: 200,
    height: 300,
    marginTop: 50,
    marginLeft: 50,
    paddingTop: 20,
    paddingLeft: 20
  },
})
// Register COMPONENT primary
module.exports = Project01;
