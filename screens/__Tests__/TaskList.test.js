import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import TaskList from '../../screens/TaskList';

test('renders the app title', () => {
    const { getByTestId } = render(<TaskList/>);

    expect(getByTestId('title')).toHaveTextContent('SasSquash');
});

test('renders the right background color', () => {
    const { getByTestId } = render(<TaskList/>);

    expect(getByTestId('container')).toHaveStyle({ backgroundColor: 'lightsalmon' });
});

test('textInput receives a placeholder prop', () => {
    const { getByTestId } = render(<TaskList/>);

    expect(getByTestId('addTaskTextInput').props).toEqual(expect.objectContaining({
        "placeholder": "Add task"
    }))
});

test('can click the addTask button', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(<TouchableOpacity onPress={onPressMock}/>)

    fireEvent.press(getByTestId("addTaskButton"));
    expect(onPressMock).toHaveBeenCalled();

});