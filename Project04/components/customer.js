import React,{Component} from 'react';
import{
  View,Text
} from 'react-native';

class Customer extends Component{
  render(){
    return(
      <View style={{backgroundColor:'blue', padding:10, color: 'white'}}>
        <Text style={{color:'white'}}>{this.props.title}</Text>
        <Text style={{color:'white'}}>{this.props.description}</Text>
      </View>
    );
  }


}
Customer.propType = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
}

module.exports = Customer;
