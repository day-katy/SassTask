import React, { useState } from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskList from './screens/TaskList';
import {Container,Content} from 'native-base';
import Swiper from 'react-native-swiper';
import Monster from './screens/Monster';
import TaskPage from './screens/TaskPage';

export default function App() {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [incompleteTasks, setIncompletedTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [imageSrc, setImageSrc] = useState(require('./assets/Sassagotchi-egg-coloured.gif'));

  const monsterPicker = () => {
    if(completedTasks.length >= 3) {
      setImageSrc('./assets/SnapSquash.gif')
    } else if(completedTasks >= 1) {
      setImageSrc('./assets/SasSquash.gif')
    } else {
      setImageSrc('./assets/Sassagotchi-egg-coloured.gif')
    }
  }

  return (
    <Container style={styles.EntireApp}>
      <Swiper
      loop ={false}
      showsPagination={false}
      index={1}
      onIndexChanged={monsterPicker()}>
        <Monster />
        <TaskList setCompletedTasks={setCompletedTasks}
                  setIncompletedTasks={setIncompletedTasks}
                  completedTasks={completedTasks}
                  incompleteTasks={incompleteTasks}
                  message={message}
                  setMessage={setMessage} />
        <TaskPage completedTasks={completedTasks}
         incompleteTasks={incompleteTasks}
          message={message}
          imageSrc={imageSrc}
           />
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
