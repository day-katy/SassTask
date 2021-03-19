import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';
import speechBox from '../assets/Speechbubble.png';

const TaskPage = () => {
  return (
    <View style={styles.monsterbox}>
      <ImageBackground style={styles.speechBubble} source={speechBox}>
        <Text style={styles.bubbleText}>Howdy</Text>
      </ImageBackground>
      <View style={styles.monster}>
        <Image source={require('../assets/SnapSquash.gif')}/>
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  monsterbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  monster:{
  },
  speechBubble: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    alignItems: 'center',
    marginLeft: 140,
  },
  bubbleText: {
    paddingTop: 50,
  }
});

export default TaskPage;
