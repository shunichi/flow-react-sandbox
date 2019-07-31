// @flow
import _ from 'lodash';
import React from 'react';
import {render} from 'react-dom';

function component(array) {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

if (document.body) {
  document.body.appendChild(component());
}

type Props = {
};

class App extends React.Component<Props> {
  render() {
    return <p>Hello, React!</p>;
  }
}

const elem = document.getElementById('app')
if (elem) {
  render(<App/>, elem);
}
