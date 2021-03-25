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
    borderWidth: 1,
    marginRight: 20
  },
  addTaskSection: {
    width: '100%',
    paddingLeft: 20,
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
 monsterSection:{
   flex: 2,

 },
 monsterSmall:{
   resizeMode: 'contain',
   height: 100,
   width: 100
 },
 monsterMedium: {
   resizeMode: 'contain',
   height: 200,
   width: 200
 },
 monsterLarge: {
  resizeMode: 'contain',
  height: 400,
  width: 400
},
 title: {
   fontSize: 40,
   fontWeight: 'bold',
   paddingTop: 50,
   textAlign: 'center',
   paddingBottom: 30
 },
 background: {
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
    alignItems: 'center',
 },
 monsterPage: {
   flex: 1,
   marginBottom: 10,
   alignItems: 'center',
 },
 completedTaskNum: {
   paddingTop: 40,
   paddingBottom: 80,

 },
 resetButton: {
    backgroundColor: 'white',
    borderRadius: 70,
    borderColor: 'grey',
    borderWidth: 1,
  },
  monsterMessage: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  evolveButton: {
    backgroundColor: 'white',
    borderRadius: 70,
    borderColor: 'grey',
    borderWidth: 1,
  },
  monsterButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center'
  },
})
