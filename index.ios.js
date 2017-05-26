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
// 尺寸 弹性Flex 宽高
// <View style={{width: 50,height:50,backgroundColor:'powderblue'}}/>
			// <Text>I am  text </Text>
			// <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
			// <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
class FixedDimensionsBasics extends Component{
	render(){
		return (
			// 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
			<View style={{flex: 1}}>
			<View style={{flex:1,backgroundColor:'powderblue'}}/>
			<View style={{flex:2,backgroundColor:'skyblue'}}/>
			<View style={{flex:3,backgroundColor:'steelblue'}}/>
			</View>
			);
	}
}
// 使用flexBox布局
class FlexDirectionBasics extends Component{
	render(){
		return(
			// 尝试把`flexDirection`改为`column`看看
			<View style={{flex:1,flexDirection:'row'}}>
			<View style={{flex:1,backgroundColor:'powderblue'}}/>
<View style={{flex:2,backgroundColor:'steelblue'}}/>
<View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
			</View>
			);
	}
}
class JustifyContentBasics extends Component{
	render(){
		return(
			// 对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
			// 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
			<View style={{
				flex:1,
				flexDirection:'column',
				justifyContent:'space-around',
			}}
				>
				<View style={{width: 50,height:50,backgroundColor:'powderblue'}}/>
			<View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
			<View style={{width:50,height:50,backgroundColor:'steelblue'}}/>

				</View>

			);
	}
}
class AlignItemBasics extends Component{
	render(){
		return(
			// 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      // 对应的这些可选项有:flex-start、center、flex-end以及stretch
			// 注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
			<View style={{flex:1,
				flexDirection:'column',
				justifyContent:'center',
				alignItems:'stretch',

			}}>
			<View style={{height:50,backgroundColor:'powderblue'}}/>
			<View style={{height:50,backgroundColor:'skyblue'}}/>
			<View style={{height:50,backgroundColor:'steelblue'}}/>
			</View>
			);
	}

}



// 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => AlignItemBasics);
