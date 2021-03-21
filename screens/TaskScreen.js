import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import TaskInput from '../components/TaskInput';
import AddTaskButton from '../components/AddTaskButton';
import TaskList from '../components/TaskList';
import Title from '../components/Title';


const TaskScreen = () => {

  const [taskItems, setTaskItems] = useState([])
  const [task, setTask] = useState();
  const [message, setMessage] = useState("");

  return (
    <ScrollView testID='container' style={styles.container}>

      <Title/>

      <TaskList
        taskItems={taskItems}
        message={message}
        setMessage={setMessage}
        setTaskItems={setTaskItems}/>

      <KeyboardAvoidingView style={styles.addTaskSection}>

        <TaskInput
          setTask ={setTask}/>

        <AddTaskButton
          setTaskItems={setTaskItems}
          taskItems={taskItems}
          task={task}
          setTask ={setTask}
          setMessage={setMessage}/>
      </KeyboardAvoidingView>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
  },
  addTaskSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default TaskScreen;
