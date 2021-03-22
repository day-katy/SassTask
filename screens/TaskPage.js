import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Monster from '../components/monster';

const TaskPage = ({completedTasks, message, imageSrc, setImageSrc}) => {

  return (
    <View style={styles.monster}>
      <Text style={styles.title}>Completed tasks: {completedTasks.length}</Text>
      <Text style={styles.title}>{message}</Text>
      <Monster imageSrc={imageSrc} setImageSrc={setImageSrc} completedTasks={completedTasks} />
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
