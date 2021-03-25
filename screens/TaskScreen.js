import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, LogBox } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Title from '../components/Title';
import styles from '../Styles/stylesheet';

const TaskScreen = ({taskItems, setTaskItems, setCompletedTasks, setIncompleteTasks, completedTasks, incompleteTasks, message, setMessage, rating, setRating, changeCount, setChangeCount}) => {
  const [task, setTask] = useState();

  LogBox.ignoreAllLogs();
  
  return (
    <ScrollView testID='container' style={styles.container}>

      <Title/>
      <KeyboardAvoidingView style={styles.addTaskSection}>

        <TaskInput
          setTask ={setTask}
          setTaskItems={setTaskItems}
          taskItems={taskItems}
          task={task}
          setTask ={setTask}
          setMessage={setMessage}
          changeCount={changeCount}
          setChangeCount={setChangeCount} />

      </KeyboardAvoidingView>

      <TaskList
        taskItems={taskItems}
        message={message}
        setMessage={setMessage}
        setTaskItems={setTaskItems}
        completedTasks={completedTasks}
        incompleteTasks={incompleteTasks}
        setCompletedTasks={setCompletedTasks}
        setIncompleteTasks={setIncompleteTasks}
        rating={rating}
        setRating={setRating}
        changeCount={changeCount}
        setChangeCount={setChangeCount} />

    </ScrollView>
  )
}

export default TaskScreen;
