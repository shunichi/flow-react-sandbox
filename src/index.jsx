// @flow
import join from 'lodash/join';

function component(array: Array<string>) {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(array, ' ');

  return element;
}

if (document.body) {
  document.body.appendChild(component(['Hello', 'webpack']));
}
