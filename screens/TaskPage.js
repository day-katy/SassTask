import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';
import Monster from '../components/Monster';
import styles from '../Styles/stylesheet';

const TaskPage = ({completedTasks, message, imageSrc, setImageSrc, rating, setRating, setMessage}) => {

  return (
    <View style={styles.monsterPage}>
      <Text style={styles.completedTaskNum}>Completed tasks: {completedTasks.length}</Text>
      <Text >{message}</Text>
      <View style={styles.monsterSection}>
          <Monster imageSrc={imageSrc} setImageSrc={setImageSrc} completedTasks={completedTasks} rating={rating} setRating={setRating} setMessage={setMessage}/>
      </View>
    </View>
  )
};



export default TaskPage;
// <Image source={require('../assets/SnapSquash.gif')}/>
