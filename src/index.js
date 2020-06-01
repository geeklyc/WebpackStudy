// /*
//  * @Description: 
//  * @Author: liyoucheng
//  * @Date: 2020-05-30 16:07:23
//  * @LastEditTime: 2020-05-30 17:17:58
//  * @LastEditors: liyoucheng
//  */ 
// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.jpg';
// import Data from './data.xml';

// function component() {
//   var element = document.createElement('div');

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'WEBPACK', '中文'], ' ');
//   element.classList.add('hello');

//   console.log(Data);

//   // var myIcon = new Image();
//   // myIcon.src = Icon;
//   // element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());
import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());