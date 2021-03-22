import React from 'react'
import { StyleSheet, View, TextInput, Keyboard, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../Styles/stylesheet';

const TaskInput = (props) => {
  const addTask = () => {
    Keyboard.dismiss();
    props.setTaskItems([...props.taskItems, props.task]);
    props.setTask('');
    props.setMessage('');
  }

  return (
    <KeyboardAvoidingView style={styles.addTaskSection}>

      <View style={styles.addTask}>
        <TextInput testID='addTaskTextInput' placeholder={'Add task'} value={props.task} onChangeText={text => props.setTask(text)} />
      </View>

      <TouchableOpacity testID="addTaskButton" onPress ={() => addTask()} style={styles.addTaskButton}>
        <View>
          <Text>
            +
          </Text>
        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}


export default TaskInput;
