import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Button } from 'react-native';
import Task from '../components/Task';
import { firebase } from '../src/firebase/config'
// import DeviceInfo from 'react-native-device-info';

//  const deviceId = DeviceInfo.getDeviceId();
 const deviceId = "phoneID";

const TaskList = ({setCompletedTasks, setIncompletedTasks, completedTasks, incompleteTasks}) => {
  const [taskItems, setTaskItems] = useState([])
  const [task, setTask] = useState();
  const addTask = () => {
    Keyboard.dismiss();
    writeTaskData(task);
    setTaskItems([...taskItems, task]);
    setTask('');
    setMessage('');
  }

  function writeTaskData(taskName) {
  firebase.database().ref('todos/' + deviceId).push({
    deviceId: deviceId,
    taskName: taskName
  })
  .then((res) => {
                        console.log(res)
                    })
                    .catch((error) => {
                        alert(error)
                           });
                    ;
}

  const [message, setMessage] = useState("");

  const yesButton = (item) => {
    setMessage("You go gurrl");
    // console.log(completedTasks);
    // let tmp = completedTasks;
    // console.log(tmp);
    // tmp.push(item);
    // setCompletedTasks(completedTasks.concat([item]));
    setCompletedTasks([...completedTasks, item]);
    completeTask();
    // callBack();
  }
  const noButton = (item) => {
    setMessage("You sicken me");
    setIncompletedTasks([...incompleteTasks, item]);
    completeTask();
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>SaasSquash</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.taskList}>{
          taskItems.map((item, index) => {
            return (
                <View key={index} style={styles.tasks}>
                 <Task text={item} />
                 <View style={styles.taskButtons}>
                  <View style={styles.yesButton}>
                    <Button title='Y' onPress={() => yesButton(item)}></Button>
                   </View>
                   <View style={styles.noButton}>
                    <Button title='N' onPress={() => noButton(item)}></Button>
                   </View>
                 </View>
                </View>
             )
          })
        }
        <Text>{message}</Text>
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
  },
  tasks: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  yesButton: {
    backgroundColor: 'skyblue',
    borderRadius: 7,

  },
  noButton: {
    backgroundColor: 'orange',
    borderRadius: 7,
  }
});

export default TaskList;
