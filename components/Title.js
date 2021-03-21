import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Title = () => {
  return (
    <View>
      <Text testID="title" style={styles.title}>SasSquash</Text>
      <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 50,
    textAlign: 'center'
  },
})

export default Title;