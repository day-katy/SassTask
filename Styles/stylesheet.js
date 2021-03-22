import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  EntireApp:{
    flex: 1,
    backgroundColor: 'lightsalmon'
  },
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
  addTaskSection: {
    width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center'
 },
 item: {
   backgroundColor: '#FFF',
   padding: 15,
   borderRadius: 10,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginBottom: 20,
   width: "80%",
 },
 itemLeft: {
   flexDirection: 'row',
   alignItems: 'center',
   flexWrap: 'wrap',
 },
 icon: {
   width: 40,
   height: 40,
 },
 itemText: {
   maxWidth: '80%',
 },
 monster:{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})
