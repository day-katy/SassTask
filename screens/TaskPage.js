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
      <View style={styles.reportSection}>
        <Text style={styles.completedTask}>Completed tasks:</Text>
        <Text style={styles.completedTaskNum}> {completedTasks.length}</Text>
      </View>
      <View style={styles.reportSection}>
        <Text style={styles.progressReport}>Current thoughts on your progress: </Text>
        <Text style={styles.monsterProgressReport}>{message}</Text>
      </View>
      <Text style={styles.monsterMessage}>{monsterSays}</Text>
      <View style={styles.monsterSection}>
          <Monster imageSrc={imageSrc} setImageSrc={setImageSrc} completedTasks={completedTasks} rating={rating} setRating={setRating} setMessage={setMessage} monsterSays={monsterSays} setMonsterSays={setMonsterSays}/>
      </View>
    </View>
  )
};



export default TaskPage;
// <Image source={require('../assets/SnapSquash.gif')}/>
