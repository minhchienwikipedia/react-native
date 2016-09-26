import React, {Component} from 'react';
import {
 View, Text,StyleSheet
} from 'react-native';

class Project03 extends Component{
  render(){
    return(
      <View style={style.body}>

        <View style={style.column}>
          <View style={style.row}>
            <Text style={style.number}>1</Text>
            <Text style={style.text}></Text>
          </View>
          <View style={style.row}>
            <Text style={style.number}>2</Text>
            <Text style={style.text}>ABC</Text>
          </View>
          <View style={style.row}>
            <Text style={style.number}>3</Text>
            <Text style={style.text}>DEF</Text>
          </View>
        </View>
        <View style={style.column}>
          <View style={style.row}>
            <Text style={style.number}>4</Text>
            <Text style={style.text}>GHI</Text>
          </View>
          <View style={style.row}>
            <Text style={style.number}>5</Text>
            <Text style={style.text}>JKL</Text>
          </View>
          <View style={style.row}>
            <Text style={style.number}>6</Text>
            <Text style={style.text}>MNO</Text>
          </View>
        </View>
        <View style={style.column}>
          <View style={style.row}>
            <Text style={style.number}>7</Text>
            <Text style={style.text}>PQRS</Text>
          </View>
          <View style={style.row}>
            <Text style={style.number}>8</Text>
            <Text style={style.text}>TUV</Text>
          </View>
          <View style={style.row}>
            <Text style={style.number}>9</Text>
            <Text style={style.text}>WXYZ</Text>
          </View>
        </View>
        <View style={style.column}>
          <View style={style.row}>

          </View>
          <View style={style.row}>
            <Text style={style.number}>0</Text>
            <Text style={style.text}></Text>
          </View>
          <View style={style.row}>
          
          </View>
        </View>
      </View>
    );
  }
}
var style = StyleSheet.create({
  body: {
    flex: 1
  },
  column: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth:1,
    flexDirection: 'row'
  },
  row:{
    flex: 1,
    borderRightColor: 'gray',
    borderRightWidth:1,
    justifyContent:'center',
    alignItems:'center'
  },
  number:{

    fontSize:40,

  },
  text:{

    justifyContent:'center'
  }
});
module.exports = Project03;
