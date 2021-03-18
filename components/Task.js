import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
  return (
    <View>
      <Text style={styles.tasks}>{props.text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  tasks: {
    padding: 12,
  },
});

export default Task;
