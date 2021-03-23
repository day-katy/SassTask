import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../Styles/stylesheet';

const Monster = (props) => {
  const [monsterMessage, setMonsterMessage] = useState();

  const monsterSays = () => {
    if(props.completedTasks.length > props.incompleteTasks.length) {
      setMonsterMessage('Keep up the good work')
    } else if (props.completedTasks.length < props.incompleteTasks.length){
      setMonsterMessage('Awful effort. Your monster is suffering...')
    } else {
      setMonsterMessage('You could do better')
    }
  }

  return (
    <View style={styles.monster}>
      <Text style={styles.title}>SassTask</Text>
      <View style={styles.stats}>
          <Text style={styles.statistics}>Number of completed tasks:{"\n"} {props.completedTasks.length}</Text>
          <Text style={styles.statistics}>Number of incompleted tasks:{"\n"}
           {props.incompleteTasks.length}</Text>
          <Text style={styles.statistics}>You current rating from your monster:{"\n"}
           {props.rating}</Text>
      </View>
      <View style={styles.mascotSection}>
        <Text style={styles.mascotStatement}>{monsterMessage}</Text>
        <TouchableOpacity onPress={() => monsterSays()}>
          <Image source={require('../assets/Sassagotchi-1-coloured.gif')} style={styles.mascot}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Monster;
