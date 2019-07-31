import "core-js";
import _ from 'lodash';
import React from 'react';
import {render} from 'react-dom';

console.log([1, [2, 3], [4, [5]]].flat(2));
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class App extends React.Component {
  render() {
    return <p>Hello, React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
