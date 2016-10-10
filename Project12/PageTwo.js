import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet
} from 'react-native';
import{
  Actions
} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';
import ViewPager from 'react-native-viewpager';
export default class PageTwo extends Component{
  Click(){
    Actions.pageThree({name: 'Minh Chien'});
  }
  render(){
    return(
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <View style={{margin:120}}>
        <Text >Props: {this.props.text} .</Text>
        <Button onPress={()=>{this.Click()}}>

          Click me.!
        </Button>
        </View>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-flag" size={30} color="#900" />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
