import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles/stylesheet';

const Title = () => {
  return (
    <View>
      <Text testID="title" style={styles.title}>SassSquatch</Text>
      <StatusBar style="auto" />
  </View>
  );
}


export default Title;
