import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import TaskList from '../../screens/TaskList';

test('renders the app title', () => {
    const { getByTestId } = render(<TaskList TestId='title'/>);

    expect(getByTestId('title')).toHaveTextContent('SasSquash');
});

test('renders the right background color', () => {
    const { getByTestId } = render(<TaskList TestId='container'/>);

    expect(getByTestId('container')).toHaveStyle({ backgroundColor: 'lightsalmon' });
});