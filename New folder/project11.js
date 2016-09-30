import React, {Component} from 'react';
import{
  View, Text,StyleSheet,Navigator
} from 'react-native';

const Register = require('./components/registerView.js')
const Login = require('./components/loginView.js')
const Root = require('./components/rootView.js')
const Home = require('./components/homeView.js')
class Project11 extends Component{

  renderScene(route, navigator){
    if(route.name == 'root'){
      return <Root navigator = {navigator}/>
    }
    if(route.name == 'register'){
      return <Register navigator = {navigator}/>
    }
    if(route.name == 'login'){
      return <Login navigator = {navigator}/>
    }
    if(route.name == 'home'){
      return <Home navigator = {navigator} {...route.passProps} />
    }
  }

  render(){
    return(
      <View style={style.container}>
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}
var style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
})
module.exports = Project11;
