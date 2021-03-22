import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Title from '../components/Title';
import styles from '../Styles/stylesheet';

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
          setTask ={setTask}
          setTaskItems={setTaskItems}
          taskItems={taskItems}
          task={task}
          setTask ={setTask}
          setMessage={setMessage}/>

      </KeyboardAvoidingView>

    </ScrollView>
  )
}

export default TaskScreen;
