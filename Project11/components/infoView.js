'use strict'
import React, {Component} from 'react';
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  ScrollView,
  Dimensions
}from 'react-native';
var w = Dimensions.get('window').width;
class infoView extends Component{
  constructor(props){
    // declare variable and pass parameters
    super(props);
    console.log(this.props.data);
    this.state={
      data: this.props.data,
      editable: false,
      email: this.props.data.email,
      password: this.props.data.password,
      authorities: this.props.data.authorities,
      edit: false,
    }
  }
  // moving screen
  redirect(routeName, token,message){
    this.props.navigator.replace({
      name: routeName,
      passProps: {
        accessToken: token,
        message: message
      }
    })
  }

  async onUpdate(){
    if(this.state.edit==true){
      var pattern =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var pattern2 = /^([a-zA-Z0-9_\.\-])+\+([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // check giá trị
        if (this.state.email == "") {
          alert("Email can't be blank");

        }else{

          if(pattern.test(this.state.email)==false){
            alert("Email is invalid");

          }else{
            if (this.state.name == "") {
              alert("Name can't be blank");

            }else{
              if (this.state.password == "" || this.state.password.length<6) {
                  alert("Password can't be blank & length >= 6");

              }else{
                        if(this.state.authorities!=0 && this.state.authorities!=1){
                          alert("Authorities is only filled 0(user) or 1(admin)");

                        }else{
                          // declare data to save variable
                          let formdata = new FormData();
                          formdata.append("id", this.state.data.id);
                          formdata.append("email", this.state.email);
                          formdata.append("password", this.state.password);
                          formdata.append("authorities", this.state.authorities);
                          try {
                            // connect with service
                            let response = await fetch('http://chienduong.esy.es/api/update.php',{
                              method: 'post',
                              headers: {
                              'Content-Type': 'multipart/form-data',
                              },
                              body: formdata
                            });
                            let res = await response.text();
                            var jsonResponse = JSON.parse(res);
                            this.setState({
                              code: jsonResponse['code'],
                               message: jsonResponse['message'],
                               result: jsonResponse['result']

                            });
                            if (response.status >= 200
                              && response.status < 300
                              && jsonResponse['code']==0) {
                              alert(this.state.message);
                                this.redirect('admin');
                            } else {
                                //Handle error
                                alert(this.state.message);
                                let error = res;
                                throw error;
                            }
                          } catch(error) {
                              alert('Nothing change.!')
                          }
                        }
                      }
                  }
                }

        }

    }else{
      alert('Nothing change.!')
    }

  }
  onEdit(){
    this.setState({editable: true, edit: true});
  }

  async pressdelete(){
    // put id to data to delete
    let formdata = new FormData();
    formdata.append("id", this.state.data.id);
    try {
      let response = await fetch('http://chienduong.esy.es/api/delete.php',{
        method: 'post',
        headers: {
        'Content-Type': 'multipart/form-data',
        },
        body: formdata
      });
      let res = await response.text();
      var jsonResponse = JSON.parse(res);
      this.setState({
        code: jsonResponse['code'],
         message: jsonResponse['message'],
         result: jsonResponse['result']

      });
      if (response.status >= 200
        && response.status < 300
        && jsonResponse['code']==0) {
          //Handle success
          let accessToken = res;
          console.log(this.state.code
            + " " + this.state.message
          + " " + this.state.result);
          //On success we will store the access_token in the AsyncStorage
        //  this.storeToken(accessToken);
        alert(this.state.message);
          this.redirect('admin');
      } else {
          //Handle error
          alert(this.state.message);
          let error = res;
          throw error;
      }
    } catch(error) {
        this.setState({error: error});
        console.log("error " + error);
        this.setState({showProgress: false});
    }
  }
   onDelete(){
    Alert.alert(
      'Delete',
      'You sure you want to delete?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        {text: 'OK', onPress: () => {this.pressdelete()}},
      ]
    );
    console.log(this.state.dataSource);

  }
  onCancel(){
    this.setState({editable: false, edit: false});
    console.log(this.state.editable);
  }

  onBack(routeName){
    this.props.navigator.pop({
      name: routeName,
      passProps: {

      }
    })
  }
  render(){
    return(

      <Image
      style={{flex:1}}
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/76/1f/c8761f6c880ad26c15a96e3689cf26ec.jpg'}}
       >
       <ScrollView>
       <TouchableOpacity style={style.back} onPress={this.onBack.bind(this)}>
         <Image style={{height:20,width:20}} source={{uri:'http://www.galtane.com/static/img/left.png'}}/>
       </TouchableOpacity>
      <View style={style.container}>
        <Text style={style.title}>Welcome Friend</Text>
        <View style={style.content}>
        <View style={style.nameinfo}><Text>Id: </Text></View>
        <View style={style.inputinfo}><TextInput editable={false}  value={this.state.data.id.toString()}/></View>
        </View>
        <View style={style.content}>
        <View style={style.nameinfo}><Text >Email: </Text></View>
        <View style={style.inputinfo}>
        <TextInput onChangeText={(val) => this.setState({email: val})}
        editable={this.state.editable}>
        {this.state.data.email}
        </TextInput>
        </View>

        </View>
        <View style={style.content}>
        <View style={style.nameinfo}><Text>Username: </Text></View>
        <View style={style.inputinfo}><TextInput editable={false}>{this.state.data.username}</TextInput></View>

        </View>
        <View style={style.content}>
        <View style={style.nameinfo}><Text >Password: </Text></View>
        <View style={style.inputinfo}>
        <TextInput onChangeText={(val) => this.setState({password: val})}
        editable={this.state.editable}>
        {this.state.data.password.toString()}
        </TextInput>
        </View>

        </View>
        <View style={style.content}>
        <View style={style.nameinfo}><Text>Authorities: </Text></View>
        <View style={style.inputinfo}>
        <TextInput onChangeText={(val) => this.setState({authorities: val})}
        editable={this.state.editable}>
        {this.state.data.authorities.toString()}
        </TextInput></View>

        </View>
        <View style={style.action}>
        <View style={{width: 50}}>
        <TouchableOpacity  onPress={this.onUpdate.bind(this)}>
        <Image
        style={{width:20,height:20}}
          source={{uri: 'http://icons.iconarchive.com/icons/icons8/android/512/Editing-Rotate-icon.png'}}
         />
        </TouchableOpacity>
        </View>
        <View style={{width: 50}}>
        <TouchableOpacity onPress={this.onEdit.bind(this)}>
        <Image
        style={{width:20,height:20}}
          source={{uri: 'https://sharpsnippets.files.wordpress.com/2013/12/editsvg.png'}}
         />
        </TouchableOpacity>
        </View>
        <View style={{width: 50}}>
        <TouchableOpacity onPress={this.onDelete.bind(this)}>
        <Image
        style={{width:20,height:20}}
          source={{uri: 'https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/Folder%20and%20Places/Trash-Recyclebin-Empty-Closed.png'}}
         />
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={this.onCancel.bind(this)}>
        <Image
        style={{width:20,height:20}}
          source={{uri: 'http://plainicon.com/dboard/userprod/2803_dd580/prod_thumb/plainicon.com-43958-256px.png'}}
         />
        </TouchableOpacity>
        </View>
        </View>
      </View>
      </ScrollView>
      </Image>
    );
  }

}



const style = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      padding:30
    },

    back: {
      marginTop: 15,
      marginLeft:10,
    },
    content: {
      width:w,
      flexDirection: 'row'
    },
    nameinfo: {
      flex: 1, alignItems: 'flex-end', justifyContent:'flex-end'
    },
    inputinfo: {
      flex: 3
    },
    action: {
      marginTop:20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
      color:'#48bbec',
      fontSize: 30,
      marginBottom:20
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      width:300,
      height:50,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    textButton: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
});
module.exports = infoView;
