import React, {Component} from 'react';
import {
  View,Text,Navigator,TouchableOpacity,TextInput
} from 'react-native';

class Project06 extends Component{
  renderScene(route, navigator){
    switch (route.name) {
      case 'red': return(<ScreenRed clickMe={()=>{navigator.push({
                                                    name: 'blue',
                                                    passProps: {
                                                      firstName: 'Minh',
                                                      lastName: 'Chien',

                                                    }

                                                  });}}
                                                  />);
        break;
      case 'blue': return(<ScreenBlue clickBack={()=>{navigator.pop({name: 'red'});}}
                                                        firstName= {route.passProps.firstName}
                                                        lastName= {route.passProps.lastName}
                                                      />);
        break;
      default:

    }
  }

  render(){
    return(
      <Navigator
        initialRoute={{name: "red"}}
        renderScene = {this.renderScene}
      />
    );
  }
}

export default class ScreenRed extends Component{

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render(){
    return(
      <View style={{backgroundColor: 'red', flex:1, alignItems:"center" ,justifyContent:'center'}}>
      <TextInput style={{height: 40, color: 'white', width:100}}
                  onChangeText={(text) => this.setState({text})}
    />
      <Text style={{marginTop:20,fontSize:20,color:'white'}}>{this.state.text}</Text>
        <TouchableOpacity onPress={this.props.clickMe}>
          <Text style={{marginTop:20,fontSize:20,color:'white'}}>Click to Change Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ScreenBlue extends Component{
  render(){
    return(
      <View style={{backgroundColor: 'blue', flex:1, alignItems:"center" ,justifyContent:'center'}}>
        <TouchableOpacity onPress={this.props.clickBack}>

          <Text style={{marginTop:20,fontSize:20,color:'white'}}>{this.props.firstName} - {this.props.lastName}</Text>
          <Text style={{marginTop:20,fontSize:20,color:'white'}}>Click to Change Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = Project06;
