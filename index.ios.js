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
/* 假如我们需要制作一段不停闪烁的文字。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个prop。而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到state中
*/
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
/*state 例子*/

class Blink extends Component{
	constructor(props){
		super(props);
		this.state = {showText: true };
setInterval(() => {
	this.setState(previousState => {
		return { showText : !previousState.showText }
	});
}
	,1000);
	}
	render(){ 
		let display = this.state.showText ? this.props.text : 'null';
		return (
			<Text>{display}</Text>
			);
	}
}

class BlinkApp extends Component{
	render(){
		return(
			<View>
			<Blink text='I love to blink'/>
			<Blink text='Yes Blinking is so great'/>
			<Blink text='why did they ever take this out of HTML'/>
			<Blink text='Look at me look at me look at me'/>
			</View>
			);
	}
}

class point{
	constructor(x,y){
this.x=x;
this.y=y;
	}
	toString(){
		let str='{' + this.x + ',' + this.y + '}';
		console.log(str);
		// return ;
	}
}
var b = new point();
b.x=3;
b.y=4;
b.toString();
/* 样式 */
class LotsOfStyles extends Component{
	render(){
		return(
			<View>
			<Text style={styles.red}>just red</Text>
			<Text style={styles.bigblue}>just bigblue </Text>
			<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
			</View>
			);
	}
}
// 常见的做法是按顺序声明和使用style属性，以借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。
// 看运行效果，可得知
const styles = StyleSheet.create({
	bigblue: {
color:'blue',
fontWeight:'bold',
fontSize: 30,
	},
	red:{
color: 'red',
	},

});





// 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
