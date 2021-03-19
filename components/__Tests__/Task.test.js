import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Task from '../../components/Task';

test('renders a task', () => {
  const { getByText, queryByText } = render(<Task text='Test task' />);

  expect(getByText('Test task')).not.toBeNull();
  expect(queryByText('ASDF')).toBeNull();
});
