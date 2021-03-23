import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Task from '../components/Task';

const TaskList = (props) => {

  const completeTask = (index) => {
    let itemsCopy = [...props.taskItems];
    itemsCopy.splice(index, 1);
    props.setTaskItems(itemsCopy);
    console.log(props.rating)
  }

  const yesButton = (item) => {
    props.setMessage("You go gurrl");
    props.setCompletedTasks([...props.completedTasks, item]);
    props.setRating(props.rating += 1)
    completeTask();
  }

  const noButton = (item) => {
    props.setMessage("You sicken me");
    props.setIncompleteTasks([...props.incompleteTasks, item]);
    props.setRating(props.rating -= 1)
    completeTask();
  }


  return (
    <View style={styles.taskList}>{
      props.taskItems.map((item, index) => {
        return (
            <TouchableOpacity key = {index} style={styles.tasks} onPress={ () => completeTask()} >
             <Task  text={item} />
             <View style={styles.taskButtons}>
              <View style={styles.yesButton}>
                <Button title='Y' onPress={() => yesButton(item)}/>
               </View>
               <View style={styles.noButton}>
                <Button title='N' onPress={() => noButton(item)}/>
               </View>
             </View>
            </TouchableOpacity>
         )
      })
    }
  </View>
  );
}

const styles = StyleSheet.create({
  taskList: {
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
})

export default TaskList;