import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Monster from '../components/monster';

const TaskPage = ({completedTasks, incompleteTasks, message}) => {

  // const interpretTasks = () => {
    console.log("Here are the completed tasks: " + completedTasks);
    console.log("Here are the incompleted tasks: " + incompleteTasks);
  // }

  return (
    <View style={styles.monster}>
      <Text style={styles.title}>Completed tasks: {completedTasks.length}</Text>
      <Text style={styles.title}>{message}</Text>
      <Monster completedTasks={completedTasks} />

    </View>
  )
};

const styles = StyleSheet.create({
  monster:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TaskPage;
// <Image source={require('../assets/SnapSquash.gif')}/>
