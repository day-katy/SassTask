import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';
import Monster from '../components/Monster';
import styles from '../Styles/stylesheet';
import Title from '../components/Title';

const TaskPage = ({completedTasks, message, imageSrc, setImageSrc, rating, setRating, setMessage}) => {
  const [monsterSays, setMonsterSays] = useState("Go do some tasks to see me evolve!")
  

  return (
    <View style={styles.monsterPage}>
      <Title/>
      <Text style={styles.completedTaskNum}>Completed tasks: {completedTasks.length}</Text>
      <Text style={styles.monsterMessage}>{message}</Text>
      <Text style={styles.monsterMessage}>{monsterSays}</Text>
      <View style={styles.monsterSection}>
          <Monster imageSrc={imageSrc} setImageSrc={setImageSrc} completedTasks={completedTasks} rating={rating} setRating={setRating} setMessage={setMessage} monsterSays={monsterSays} setMonsterSays={setMonsterSays}/>
      </View>
    </View>
  )
};



export default TaskPage;
// <Image source={require('../assets/SnapSquash.gif')}/>
