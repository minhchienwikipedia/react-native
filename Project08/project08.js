import React,{Component} from 'react';
import{
  View,Text, ListView,ScrollView,Image, TextInput
} from 'react-native';

var Data = [
  {name:'Duong Minh Chien', gender: 'Male'},
  {name:'Nguyen Thi Hoa', gender: 'Female'},
  {name:'Hoang Minh Anh', gender: 'Male'}
]
class Project08 extends Component{
  constructor(props){
    super(props);
    var year: ''
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2});
    this.state = {
      dataSource: ds.cloneWithRows(Data)
    };
  }

  insertRow(property){
    return(
      <View style={{padding:10, borderTopWidth:1,borderTopColor:'gray'}}>
        <Text style={{color:'red'}}>{property.name}</Text>
        <Text>{property.gender}</Text>
      </View>
    );
  }


  getInput(event){
    var YEAR = event.nativeEvent.text;
    this.setState({year : YEAR});
  }
  render(){
    var content = null;
    if(this.state.year !='null'){
      content = <Text style={{color: 'blue', fontSize: 20}}>Age: {2016-this.state.year}</Text>
    }
    return(
      <View>
      <Text>LIST VIEW</Text>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.insertRow}
        />
        <Text>Year of Birth</Text>
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      returnKeyType = 'go'
      onSubmitEditing = {(event) => this.setState({ year: event.nativeEvent.text })}
      />
      {content}
      </View>
    );
  }
}

module.exports = Project08;
