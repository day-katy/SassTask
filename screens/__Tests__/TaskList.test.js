import React from 'react';

import { render } from '@testing-library/react-native';

import Task from '../../components/Task';

test('', () => {
    const { getByText, queryByText } = render(<Task text="Test task" />);

    expect(getByText("Test task")).not.toBeNull();
    expect(queryByText('ASDF')).toBeNull();
});