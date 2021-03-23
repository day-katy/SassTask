import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const TaskPage = ({completedTasks, incompleteTasks}) => {

  return (
    <View style={styles.monster}>
      <Text style={styles.title}>Feedback Here!</Text>
      <Image source={require('../assets/SnapSquash.gif')}/>
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