var React = require('react-native');
var hello = require('./hello.js');
var {AppRegistry} = React;
AppRegistry.regesterComponent('HelloWorld', ()=>hello);