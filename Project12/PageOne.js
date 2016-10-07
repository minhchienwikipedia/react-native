import React, {Component} from 'react';
import{
  View,
  Text
} from 'react-native';
import{Actions} from 'react-native-router-flux';
import Button from 'apsl-react-native-button';
export default class PageOne extends Component{
  Click(){
    Actions.pageTwo({text: 'Hello.!'})
  }
  render(){
    return(
      <View style={{margin:120}}>
        <Button
          style={{fontSize: 20, color: 'white', backgroundColor: '#80aaff'}}
          onPress={()=>{this.Click()}}>
          Press me.!
        </Button>

      </View>
    );
  }
}
