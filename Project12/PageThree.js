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
var ViewPager = require('react-native-viewpager');
export default class PageThree extends Component{
  viewPage(){
    Actions.mainScreen({text: 'hello'});
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {/*Rest of App come ABOVE the action button component!*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="View Page" onPress={()=>{this.viewPage()}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
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
