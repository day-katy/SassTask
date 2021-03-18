import React from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskScreen from './screens/TaskScreen';
import {Container,Content} from 'native-base';
import Swiper from 'react-native-swiper';
import Monster from './screens/Monster';

export default function App() {
  return (
        <Swiper
        loop ={false}
        showsPagination={false}
        index={1}>
          <Monster/>
          <TaskScreen/>
          <Text>Task Page</Text>
        </Swiper> 
  );
}
