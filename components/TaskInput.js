import React from 'react'
import { StyleSheet, View, TextInput, Keyboard, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../Styles/stylesheet';

import { writeData } from '../src/firebase/utils';

const TaskInput = (props) => {
  const addTask = () => {
    Keyboard.dismiss();
    // props.setTaskItems([...props.taskItems, props.task]);

    const dbInfo = {taskName: props.task, taskStatus: ' '};
    writeData(dbInfo);
    let newCount = props.changeCount + 1;
    props.setChangeCount(newCount);

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
