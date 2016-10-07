import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
var ViewPager = require('react-native-viewpager');
import PageOne from './PageOne.js';
import PageTwo from './PageTwo.js';
import PageThree from './PageThree.js';
import MainScreen from './MainScreen.js';

export default class Project12 extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
          <Scene key="pageThree" component={PageThree} title="PageThree" />
          <Scene key="mainScreen" component={MainScreen} title="MainScreen" />
        </Scene>
      </Router>
    );
  }
}

module.exports = Project12;
