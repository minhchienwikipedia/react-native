import React, {Component} from 'react';
import{
  View,
  Text
} from 'react-native';
import{Actions} from 'react-native-router-flux';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
export default class PageOne extends Component{
  Click(){
    Actions.pageTwo({text: 'Hello.!'})
  }
  render(){
    return(
      <View style={{marginTop:120}}>
        <Button
          style={{fontSize: 20, backgroundColor: '#3b5998', alignItems: 'center', borderColor:'white'}}
          onPress={()=>{this.Click()}}>
          <Text style={{fontFamily: 'Arial', color:'white' ,fontSize: 15}}>Press me.!</Text>
        </Button>
        <Text>Lorem <Icon name="md-attach" color="#4F8EF7" /> Ipsum</Text>
      </View>

    );
  }
}
