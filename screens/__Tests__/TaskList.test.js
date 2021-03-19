import React from 'react';
import { render } from '@testing-library/react-native';
import TaskList from '../../screens/TaskList';
import Task from '../../components/Task';

test('renders the app title', () => {
    const { getByText } = render(<TaskList text="SasSquash" />);

    expect(getByText("SasSquash")).not.toBeNull();
});

test('renders a task', () => {
    const { getByText, queryByText } = render(<Task text="Test task" />);

    expect(getByText("Test task")).not.toBeNull();
    expect(queryByText('ASDF')).toBeNull();
});