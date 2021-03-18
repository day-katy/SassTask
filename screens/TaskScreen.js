import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import Task from '../components/Task';





const TaskScreen = () => {
  const [taskItems, setTaskItems] = useState([])
  const [task, setTask] = useState();
  const addTask = () => { 
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask('');
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Team SassTask!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.taskList}>{
          taskItems.map((item, index) => {
            return <Task key = {index} text={item} />
          })
        }
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
  }
});

export default TaskScreen;
