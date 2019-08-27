import _ from 'lodash';
import printMe from './print';

function component() {
  let element = document.createElement('div');

  const btn = document.createElement('button');
  
  element.innerHTML = _.join(['Hello', 'webpck'], ' ');

  btn.innerHTML='点击这里，然后查看console';

  btn.onclick = printMe;
  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());