import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './Task';

const addTask = () => {

}

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Team SassTask!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.taskList}>
        <Task text={'task1'} />
        <Task text={'task2'}/>
        <Task text={'dj khalid'}/>
      </View>

      <View style={styles.addTaskSection}>
        <View style={styles.addTask}>
        <TextInput placeholder='add task'/>
        </View>

        <TouchableOpacity onPress ={addTask()} style={styles.addTaskButton}>+</TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  addTask: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 60,
    margin: 5,
  },
  addTaskButton: {
    backgroundColor: '#f05365',
    borderRadius: 60,
    borderColor: 'grey',
    textAlign: 'center',
    height: 40,
    width: 40,
    display: 'flex',
    margin: 10,
    fontSize: 40,

  },
  title: {
    backgroundColor: 'blue',
  }
});

export default TaskScreen;
