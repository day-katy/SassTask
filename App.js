import React, { useState } from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskScreen from './screens/TaskScreen';
import {Container,Content} from 'native-base';
import Swiper from 'react-native-swiper';
import Monster from './screens/Monster';
import TaskPage from './screens/TaskPage';
import styles from './Styles/stylesheet';
import returnDeviceId from './katy-id'

 async function thingy(){
  const deviceId =  await returnDeviceId()
  console.log(deviceId)
}

thingy()

export default function App() {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [imageSrc, setImageSrc] = useState(require('./assets/Sassagotchi-egg-coloured.gif'));
  const [rating, setRating] = useState(0)

  return (
    
    <Container testID= "entireAppWrapper" style={styles.EntireApp}>
      <Swiper
      loop ={false}
      showsPagination={false}
      index={1}>
        <Monster />
        <TaskScreen 
          setCompletedTasks={setCompletedTasks}
          setIncompleteTasks={setIncompleteTasks}
          completedTasks={completedTasks}
          incompleteTasks={incompleteTasks}
          message={message}
          setMessage={setMessage}
          completedTasks={completedTasks}
          rating={rating}
          setRating={setRating} />
        <TaskPage 
          completedTasks={completedTasks}
          incompleteTasks={incompleteTasks}
          message={message}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          rating={rating}
          setRating={setRating} />
      </Swiper>
    </Container>
  );
}
