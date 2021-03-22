import React from 'react';
import { StyleSheet, Keyboard, Text, View, TouchableOpacity } from 'react-native';

const AddTaskButton = (props) => {

  const addTask = () => {
    Keyboard.dismiss();
    props.setTaskItems([...props.taskItems, props.task]);
    props.setTask('');
    props.setMessage('');
  }

  return (
    <TouchableOpacity testID="addTaskButton" onPress ={() => addTask()} style={styles.addTaskButton}>
      <View>
        <Text>
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  }
})

export default AddTaskButton;