import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import TaskScreen from '../../screens/TaskScreen';

test('renders the app title', () => {
    const { getByTestId } = render(<TaskScreen/>);

    expect(getByTestId('title')).toHaveTextContent('SasSquash');
});

test('renders the right background color', () => {
    const { getByTestId } = render(<TaskScreen/>);

    expect(getByTestId('container')).toHaveStyle({ backgroundColor: 'lightsalmon' });
});