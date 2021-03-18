import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe('<App />', () => {
  const tree = renderer.create(<App />).toJSON();

  it('has 1 child', () => {
    expect(tree.children.length).toBe(3);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

});
