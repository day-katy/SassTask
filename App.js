import React, { useState, useEffect } from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskScreen from './screens/TaskScreen';
import {Container,Content} from 'native-base';
import Swiper from 'react-native-swiper';
import Monster from './screens/Monster';
import TaskPage from './screens/TaskPage';
import styles from './Styles/stylesheet';

import { loadTasksFromDB } from './src/firebase/utils'

export default function App() {
  const [taskItems, setTaskItems] = useState([])
  const [completedTasks, setCompletedTasks] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [imageSrc, setImageSrc] = useState(require('./assets/Sassagotchi-egg-coloured.gif'));
  const [rating, setRating] = useState(0)

  const [changeCount, setChangeCount] = useState(0)

  useEffect(() => {
    async function fetchData() {
      let res = await loadTasksFromDB()
      setTaskItems([...res])
    }
    fetchData();
    return () => {
      // DB cleanup code here;
    }
  }, [changeCount])

  return (

    <Container testID= "entireAppWrapper" style={styles.EntireApp}>
      <Swiper
      loop ={false}
      showsPagination={false}
      index={0}>
        <TaskPage
          completedTasks={completedTasks}
          incompleteTasks={incompleteTasks}
          message={message}
          setMessage={setMessage}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          rating={rating}
          setRating={setRating} />
        <TaskScreen
          taskItems ={taskItems}
          setTaskItems={setTaskItems}
          setCompletedTasks={setCompletedTasks}
          setIncompleteTasks={setIncompleteTasks}
          completedTasks={completedTasks}
          incompleteTasks={incompleteTasks}
          message={message}
          setMessage={setMessage}
          completedTasks={completedTasks}
          rating={rating}
          setRating={setRating}
          changeCount={changeCount}
          setChangeCount={setChangeCount} />

      </Swiper>
    </Container>
  );
}
