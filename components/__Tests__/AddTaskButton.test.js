import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import AddTaskButton from '../../components/AddTaskButton';

// test('can press the addTask button', () => {
//   const onPressMock = jest.fn();
//   const { getByTestId } = render(<AddTaskButton onPress={onPressMock} taskItems={[]} />)
//
//   fireEvent.press(getByTestId("addTaskButton"));
//   expect(onPressMock).toHaveBeenCalled();
//
// });
