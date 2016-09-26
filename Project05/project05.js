import React,{Component} from 'react';
import {
  View,Text,TouchableOpacity,StyleSheet,TextInput
} from 'react-native';
class Project05 extends Component{
  constructor(props){
    super(props);
    this.state={
      number: 1
    }
  }
  clicktoplus(){
    this.setState({
      number: this.state.number + 1
    })
  }
  clicktominus(){
    this.setState({
      number: this.state.number - 1
    })
  }
  render(){
    return(
      <View style={style.body}>
        <View style={style.header}>
            <Text style={style.number}>{this.state.number}</Text>
        </View>
        <View style={style.bottom}>
            <TouchableOpacity onPress={()=> {this.clicktoplus()}} style={style.btnLeft}>
                <Text style={style.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {this.clicktominus()}} style={style.btnRight}>
                <Text style={style.text}>-</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
var style= StyleSheet.create({
  body:{
    flex:1
  },
  btnLeft:{
      flex:1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor: 'gray',
      borderRightWidth: 1
  },

  btnRight:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue'
  },
  text: {
    fontSize: 40,
    color: 'white'
  },
  header:{
    backgroundColor: 'black',
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: 'white',
    fontSize: 100
  },
  bottom:{
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row'
  }
});
module.exports = Project05;
