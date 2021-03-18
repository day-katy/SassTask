import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.tasks}>
      <Text>{props.text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  tasks: {
  },
});

export default Task;
