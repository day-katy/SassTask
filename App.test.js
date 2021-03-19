import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import App from './App.js';

test('renders the right background color across entire app', () => {
  const { getByTestId } = render(<App TestId='entireAppWrapper'/>);

  expect(getByTestId('entireAppWrapper')).toHaveStyle({ backgroundColor: 'lightsalmon' });
});