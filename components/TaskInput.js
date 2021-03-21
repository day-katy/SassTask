import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const TaskInput = (props) => {
  return (
    <View style={styles.addTask}>
      <TextInput testID='addTaskTextInput' placeholder={'Add task'} value={props.task} onChangeText={text => props.setTask(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
  addTask: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    maxWidth: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  }
});

export default TaskInput;