import React, {Component} from 'react';
import{
  View, Text
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

const Login = require('./components/loginView.js')
class Project10 extends Component{
  render(){
    return <ScrollableTabView
      style={{marginTop: 20, }}
      renderTabBar={() => <DefaultTabBar />}
    >

    
      <Text tabLabel='Libary'>favorite</Text>
      <Text tabLabel='Music'>project</Text>
      <Text tabLabel='Film'>My</Text>
    </ScrollableTabView>;
  }
}

module.exports = Project10;
