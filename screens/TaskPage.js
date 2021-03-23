import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Monster from '../components/Monster';
import styles from '../Styles/stylesheet';

const TaskPage = ({completedTasks, message, imageSrc, setImageSrc, rating, setRating}) => {

  return (
    <View style={styles.monsterPage}>
      <Text style={styles.completedTaskCounter}>Completed tasks: {completedTasks.length}</Text>
      <Text style={styles.monsterComment}>{message}</Text>
      <View style={styles.monsterSection}>
        <ImageBackground style={styles.monsterBackground} source={require('../assets/Sassagotchi-background.png')}>
          <Monster imageSrc={imageSrc} setImageSrc={setImageSrc} completedTasks={completedTasks} rating={rating} setRating={setRating}/>
        </ImageBackground>
      </View>
    </View>
  )
};



export default TaskPage;
// <Image source={require('../assets/SnapSquash.gif')}/>
