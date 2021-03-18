import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Image, Button } from 'react-native';
import Task from '../components/Task';
import happyPNG from '../assets/Happy-face.png'
import unhappyPNG from '../assets/Unhappy-face.png'
import happyGif from '../assets/Happy-face.gif'
import unhappyGif from '../assets/Unhappy-face.gif'
import straightPNG from '../assets/Straight-face.png'

const TaskScreen = () => {

  const [taskItems, setTaskItems] = useState([])
  const [task, setTask] = useState();
  const addTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  };
  const [imageSrc, setImageSrc] = useState(straightPNG);
  const [message, setMessage] = useState("");

  const changeImage = () => {
    if (imageSrc === happyGif) {
      setImageSrc(unhappyGif);
      setMessage("Is that the best you got?");
    } else {
      setImageSrc(happyGif);
      setMessage("Great job!");
    }
  }

  const changeImageBad = () => {
    setImageSrc(unhappyGif);
    setMessage("Is that the best you got?");
  }

  const changeImageGood = () => {
    setImageSrc(happyGif);
    setMessage("Great job!");
  }

  const renderImage = () => {
      return (
        <View>
          <Image source={imageSrc} style={styles.sassagotchi}/>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )
    }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>Team SassTask!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.taskList}>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity style={styles.task}>
                <Task key = {index} text={item} />
                <Button title='Complete' onPress={() => changeImageGood()}></Button>
                <Button title='Incomplete' onPress={() => changeImageBad()}></Button>
              </TouchableOpacity>
            )
          })
        }
      </View>

      <View style={styles.sassagotchiSection}>
        <View>
          {renderImage()}
        </View>
      </View>

      <View style={styles.addTaskSection}>
        <View style={styles.addTask}>
        <TextInput placeholder={'Add task'} value={task} onChangeText={text => setTask(text)} />
        </View>

        <TouchableOpacity onPress ={() => addTask()} style={styles.addTaskButton}>
          <View>
            <Text>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskList: {
  },
  task: {
    backgroundColor: 'white',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  addTaskSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  addTask: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 60,
    margin: 5,
  },
  addTaskButton: {
    backgroundColor: '#f05365',
    borderRadius: 60,
    borderColor: 'grey',
    textAlign: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    display: 'flex',
    margin: 10,
    fontSize: 40,

  },
  title: {
    fontSize: 40,
  },
  sassagotchiSection: {
    alignItems: 'center',
    margin: 10,
  },
  sassagotchi: {
    height: 64,
    width: 64,
    alignSelf: 'center'
  },
  messageText: {
    alignSelf: 'center'
  },
});

export default TaskScreen;
