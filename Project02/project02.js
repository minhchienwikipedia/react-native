import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Project02 extends Component {
  constructor(props){
    super(props);
    console.log("Constructor");
  }

  render() {
    console.log("render");
    return (
      <View style={style.body}>
        <View style={style.content1}></View>
        <View style={style.content2}></View>
      </View>
    );
  }
}

var style = StyleSheet.create({
  body:{
    backgroundColor:'black',
    flex: 1,
    flexDirection: 'row' // Display direction : 'column' or 'row'
  },
  content1:{
    backgroundColor: 'red',
    flex: 1
  },
  content2:{
    backgroundColor: 'yellow',
    flex: 1
  }
});
module.exports = Project02;
