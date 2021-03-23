import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Monster from '../components/Monster';

const TaskPage = ({completedTasks, message, imageSrc, setImageSrc, rating, setRating}) => {

  return (
    <View>
      <Text style={styles.title}>Completed tasks: {completedTasks.length}</Text>
      <Text style={styles.title}>{message}</Text>
      <Monster imageSrc={imageSrc} setImageSrc={setImageSrc} completedTasks={completedTasks} rating={rating} setRating={setRating}/>
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
