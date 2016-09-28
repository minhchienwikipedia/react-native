import React, {Component} from 'react';
import{
   View, Image
} from 'react-native';

class Project07 extends Component{
  render(){
    return(
      <View>
      <Image
        source={require('./img/vi.png')}
        // style={{width:300, height: 200}}
      />
      <Image
        source={{uri: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg'}}
        style={{width:300, height: 200}}
      />
      </View>
    );
  }
}

module.exports = Project07;
