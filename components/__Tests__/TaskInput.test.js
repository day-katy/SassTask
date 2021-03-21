import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import TaskInput from '../../components/TaskInput';

test('textInput has a placeholder', () => {
  const { getByTestId } = render(<TaskInput/>);
  
  expect(getByTestId('addTaskTextInput').props).toEqual(expect.objectContaining({
    placeholder: "Add task"
  }))
});

// test('OnChangeText method gets called', () => {
//   const onChangeTextMock = jest.fn();

//   const { getByTestId } = render(<TaskInput onChangeText={onChangeTextMock}/>);

//   fireEvent.changeText(getByTestId('addTaskTextInput'), "testing");
//   expect(onChangeTextMock).toHaveBeenCalled();
// });