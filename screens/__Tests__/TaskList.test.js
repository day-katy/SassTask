import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import TaskList from '../../screens/TaskList';
import Task from '../../components/Task';
import App from '../../App';

test('renders a task', () => {
    const { getByText, queryByText } = render(<Task text='Test task' />);

    expect(getByText('Test task')).not.toBeNull();
    expect(queryByText('ASDF')).toBeNull();
});

test('renders the app title', () => {
    const { getByTestId } = render(<TaskList TestId='title'/>);

    expect(getByTestId('title')).toHaveTextContent('SasSquash');
});

test('renders the right background color', () => {
    const { getByTestId } = render(<TaskList TestId='container'/>);

    expect(getByTestId('container')).toHaveStyle({ backgroundColor: 'lightsalmon' });
});

test('renders the right background color across entire app', () => {
    const { getByTestId } = render(<App TestId='entireAppWrapper'/>);

    expect(getByTestId('entireAppWrapper')).toHaveStyle({ backgroundColor: 'lightsalmon' });
});