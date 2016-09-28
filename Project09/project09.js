import React, {Component} from 'react';
import {
  View,Text,StyleSheet,Navigator,TouchableHighlight
} from 'react-native';

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index) {
    if(index == 0){
      return null;
    }
    if(route.name=='Login' || route.name=='Dashboard'){
      return null;
    }
    return(<TouchableHighlight  underlayColor='rgba(0,0,0,0)' onPress={() => {
              if(index > 0){
                navigator.pop();
              }
          }}>

            <Text style={{marginTop: 10, color:'#007AFF'}}>Back</Text>
         </TouchableHighlight>
    )
  },
  RightButton: function(route){
    return null;
  },
  Title: function(route){
    if(route.name == 'Login' || route.name == 'Dashboard'){
      return null;
    }
    return(
      <Text style={{marginTop: 10, color:'#007AFF' }}>
        {route.name}
      </Text>
    )
  },
};

const Login = require('./component/loginView.js')
const Dashbroad = require('./component/dashbroadView.js')
class Project09 extends Component {
  renderScene(route,navigator){
    switch (route.name) {
      case 'Login':
        return(
          <Login navigator={navigator} route={route}/>
        );
        break;
      case 'Dashbroad':
        return(
          <Dashbroad navigator={navigator} route={route}/>
        );
        break;

    }
  }
  render(){
    return(

      <Navigator style={styles.bar}
         initialRoute={{name: 'Login'}}
         renderScene={this.renderScene}
         configureScene={(route) => {
           if(route.sceneConfig){
             return route.sceneConfig;
           }
           return Navigator.SceneConfigs.FloatFromRight
         }}
         navigationBar={
           <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}/>}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
  },
  bar:{
    backgroundColor: '#fff'
  }
});

module.exports = Project09;
