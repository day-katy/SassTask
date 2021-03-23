import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../Styles/stylesheet';

const Monster = (props) => {
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
        <Image source={require('../assets/Sassagotchi-1-coloured.gif')} style={styles.mascot}/>
      </View>
    </View>
  )
};

export default Monster;
