import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Monster from '../components/Monster';
import styles from '../Styles/stylesheet';

const TaskPage = ({completedTasks, message, imageSrc, setImageSrc, rating, setRating}) => {

  return (
    <View style={styles.monsterSection}>
      <Text >Completed tasks: {completedTasks.length}</Text>
      <Text >{message}</Text>
      <Monster imageSrc={imageSrc} setImageSrc={setImageSrc} completedTasks={completedTasks} rating={rating} setRating={setRating}/>
    </View>
  )
};



export default TaskPage;
// <Image source={require('../assets/SnapSquash.gif')}/>
