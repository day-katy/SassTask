import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Header, KeyboardAvoidingView, Keyboard } from 'react-native';
import Task from '../components/Task';
import { SafeAreaProvider } from 'react-native-safe-area-context';






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
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
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
            <Text style={styles.buttonText}>
              +
              </Text>
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
    flexDirection: 'row',
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
    // textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    display: 'flex',
 
    
  },
  buttonText: {
    fontSize: 40,
    // textAlign: 'center',
    // vAlignItems: 'center'
  },
  title: {
    fontSize: 40,
  }
});

export default TaskScreen;
