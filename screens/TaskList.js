import React, {useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Button } from 'react-native';
import Task from '../components/Task';
import { firebase } from '../src/firebase/config'
// import DeviceInfo from 'react-native-device-info';

//  const deviceId = DeviceInfo.getDeviceId();
 const deviceId = "phoneID_2";

const TaskList = ({setCompletedTasks, setIncompletedTasks, completedTasks, incompleteTasks}) => {
  const [taskItems, setTaskItems] = useState([])
  const [task, setTask] = useState();
  const [changeCount, setChangeCount] = useState(0)
  const addTask = () => {
    Keyboard.dismiss();
    writeTaskData(task);
    let newCount = changeCount + 1
    setChangeCount(newCount)
    // setTaskItems([...taskItems, task]);
    setTask('');
    setMessage('');
  }

  function writeTaskData(taskName) {
    firebase.database().ref('todos/' + deviceId).push({
      taskId: `${deviceId}${firebase.database.ServerValue.TIMESTAMP.valueOf()}`,
      taskName: taskName,
      taskStatus: ' ',
      time: firebase.database.ServerValue.TIMESTAMP
  })
  .catch((error) => {
      alert(error)
          });
}

  const [message, setMessage] = useState("");

  const yesButton = (item) => {
    setMessage("You go gurrl");
    // console.log(completedTasks);
    // let tmp = completedTasks;
    // console.log(tmp);
    // tmp.push(item);
    // setCompletedTasks(completedTasks.concat([item]))

    var ref = firebase.database().ref('todos/' + deviceId);

    ref.orderByChild("time").equalTo(item[0]).on("child_added", function(snapshot) {
      ref.child(snapshot.key).update({'taskStatus': 'Y'})
    });
    let newCount = changeCount + 1
    setChangeCount(newCount)
    setCompletedTasks([...completedTasks, item]);
    completeTask();
  }

  const noButton = (item) => {
    setMessage("You sicken me");

    var ref = firebase.database().ref('todos/' + deviceId);

    ref.orderByChild("time").equalTo(item[0]).on("child_added", function(snapshot) {
      ref.child(snapshot.key).update({'taskStatus': 'N'})
    });
    let newCount = changeCount + 1
    setChangeCount(newCount)
    setIncompletedTasks([...incompleteTasks, item]);
    completeTask();
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    // setTaskItems(itemsCopy);
  }

  function loadTasksFromDB() {
    const todosFromDB = [];
    var userTodos = firebase.database().ref('todos/' + deviceId);
    if (userTodos) {
      userTodos.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          for (const [key, value] of Object.entries(data)) {
            if ( value.taskStatus !== 'Y' ) {
              todosFromDB.push([value.time, value.taskName]);
            }
          }
        }
        setTaskItems([...todosFromDB]);
      });
    }
  }

  useEffect(() => {
    loadTasksFromDB();
  }, [changeCount])

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
                 <Task text={item[1]} />
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
