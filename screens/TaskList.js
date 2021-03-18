import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import Task from '../components/Task';





const TaskList = () => {
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
        <Text style={styles.title}>SasSquash</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.taskList}>{
          taskItems.map((item, index) => {
            return <Task key = {index} text={item} />
          })
        }
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.addTaskSection}>
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
      
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
  },
  addTaskSection: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addTask: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    maxWidth: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 50,
    textAlign: 'center'
  },
  taskList:{
    paddingTop: 20,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center'
  }
});

export default TaskList;
