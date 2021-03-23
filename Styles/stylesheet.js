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
   textAlign: 'center'
 },
 monsterPage:{
   flex: 1,
   marginBottom: 60
 },
 completedTaskCounter: {
   fontSize: 30,
   paddingTop: 100,
   fontStyle: 'normal',
   fontWeight: 'bold'
 },
 monsterComment: {
   color: 'darkgreen',
   fontSize: 30,
   fontWeight: 'bold',
   alignSelf: 'center',
   paddingTop: 200,
 },
 monsterSection: {
  flex: 1,
},
  monsterBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: "100%",
    width: "100%",
  },
  stats: {
    backgroundColor: 'white',
    borderRadius: 60,
    marginTop: 50,
    padding: 30
  },
  statistics: {
    fontSize: 20,
    padding: 5,
    margin: 5,
    fontWeight: 'bold'
  },
  mascot: {
    alignSelf: 'center',
    width: 200,
    height: 200
  },
  mascotSection: {
    paddingTop: 100
  }
})