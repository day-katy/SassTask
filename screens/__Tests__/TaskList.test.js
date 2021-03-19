import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import TaskList from '../../screens/TaskList';
import Task from '../../components/Task';

test('renders the app title', () => {
    const { getByTestId } = render(<TaskList TestId="title"/>);

    expect(getByTestId("title")).toHaveTextContent('SasSquash');
});

test('renders a task', () => {
    const { getByText, queryByText } = render(<Task text="Test task" />);

    expect(getByText("Test task")).not.toBeNull();
    expect(queryByText('ASDF')).toBeNull();
});