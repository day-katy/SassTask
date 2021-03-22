import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../Styles/stylesheet'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.icon}><Image source={require('../assets/Sassagotchi.gif')}/></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  )
}


export default Task;
