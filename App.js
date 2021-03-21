import React from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskScreen from './screens/TaskScreen';
import {Container,Content} from 'native-base';
import Swiper from 'react-native-swiper';
import Monster from './screens/Monster';
import TaskPage from './screens/TaskPage';

export default function App() {
  return (
    <Container testID= "entireAppWrapper" style={styles.EntireApp}>
      <Swiper
      loop ={false}
      showsPagination={false}
      index={1}>
        <Monster/>
        <TaskScreen/>
        <TaskPage/>
      </Swiper> 
    </Container>
  );
}

const styles = StyleSheet.create({
  EntireApp:{
    flex: 1,
    backgroundColor: 'lightsalmon'
  }
});
