import React, {Component} from 'react';
import{
  View, Text,StyleSheet,Navigator
} from 'react-native';
// declare components
const Register = require('./components/registerView.js')
const Login = require('./components/loginView.js')
const Root = require('./components/rootView.js')
const Home = require('./components/homeView.js')
const Admin = require('./components/adminView.js')
const Info = require('./components/infoView.js')
const Add = require('./components/addView.js')
class Project11 extends Component{
// declare navigator and condition navigator
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
    if(route.name == 'admin'){
      return <Admin navigator = {navigator} {...route.passProps} />
    }
    if(route.name == 'info'){
      return <Info navigator = {navigator} {...route.passProps} />
    }
    if(route.name == 'add'){
      return <Add navigator = {navigator} {...route.passProps} />
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
