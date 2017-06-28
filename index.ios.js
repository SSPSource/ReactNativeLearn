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
  View
} from 'react-native';
/* 假如我们需要制作一段不停闪烁的文字。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个prop。而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到state中
*/
/*** var 全部变量，let局部变量，只在let命令所在的代码块内有效 ***/
var a=[];
var log="======log====";
var logmes="====dsd====";
for (let i = 0; i < 10; i++) {
	// console.log(log + i);
	a[i] = function () {
		console.log(logmes+i);
	};
}
a[6]();//6
for (var i = 0; i < 10; i++) {
	// console.log(log + i);
	a[i] = function () {
		console.log(logmes+i);
	};
}
a[6]();//10

for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(logmes+i);
}


class HelloWorldApp extends Component{
  render(){
  return(
    <Text>Hello {this.props.name}</Text>
    );
}
}

// 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
