/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
class HelloWorldApp extends Component{
  render(){
  return(
    <Text>Hello {this.props.name}</Text>
    );
}
}
class Bananas extends Component{
	render(){
		let pic = {
uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		
		};
		return (
			<View style={{alignItems:'center'}}>
			<Image source={pic} style={{width:193,height:110}}/>
			<HelloWorldApp name='ssp'/>
			<HelloWorldApp name='ssp2'/>
			</View>
			
			);
	}
}



// 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
