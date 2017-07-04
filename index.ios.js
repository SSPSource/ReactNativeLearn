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

/************以下是let 和const 命令 总结******************/
// 1.ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
// 2.var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。
// 3.ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
// 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）
// 4.let不允许在相同作用域内，重复声明同一个变量。
// 5.（由于兼容问题，考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。）ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
// 函数声明语句
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
// 6.（目前还是提案）do表达式(在块级作用域之前加上do,得到返回值)，也可以使用全局变量得到返回值
// let x = do {
//   let t = f();
//   t * t + 1;
// };//变量x会得到整个块级作用域的返回值
// 7.const声明一个只读的常量。一旦声明，常量的值就不能改变。
// 8.const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动
// 彻底冻结
// const foo = Object.freeze({});
// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach( (key, i) => {
//     if ( typeof obj[key] === 'object' ) {
//       constantize( obj[key] );
//     }
//   });
// };
// 9.ES5 只有两种声明变量的方法：var命令和function命令。ES6除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有6种声明变量的方法
// 10.顶层对象的属性与全局变量挂钩，被认为是JavaScript语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。
// 11.ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
// var a = 1;
// // 如果在Node的REPL环境，可以写成global.a
// // 或者采用通用方法，写成this.a
// window.a // 1

// let b = 1;
// window.b // undefined
// 12.global对象
// ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。

// 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
// 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
// Node 里面，顶层对象是global，但其他环境都不支持。
// 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

// 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
// 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
// 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。
// 综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。
// // 方法一
// (typeof window !== 'undefined'
//    ? window
//    : (typeof process === 'object' &&
//       typeof require === 'function' &&
//       typeof global === 'object')
//      ? global
//      : this);

// // 方法二
// var getGlobal = function () {
//   if (typeof self !== 'undefined') { return self; }
//   if (typeof window !== 'undefined') { return window; }
//   if (typeof global !== 'undefined') { return global; }
//   throw new Error('unable to locate global object');
// };）


/************以上是let 和const 命令 总结******************/



// console.log(logmes+x);
/* 假如我们需要制作一段不停闪烁的文字。文字内容本身在组件创建时就已经指定好了，所以文字内容应该是一个prop。而文字的显示或隐藏的状态（快速的显隐切换就产生了闪烁的效果）则是随着时间变化的，因此这一状态应该写到state中
*/
/*** var 全部变量，let局部变量，只在let命令所在的代码块内有效 ***/
/*** const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。***/
/*** const的作用域与let命令相同：只在声明所在的块级作用域内有效 ***/

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

var tmp = new Date();

function f() {
  console.log(logmes+tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); 


class HelloWorldApp extends Component{
  render(){
  return(
    <Text>Hello {this.props.name}</Text>
    );
}
}

// 注意，这里用引号括起来的'AwesomeProject'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
