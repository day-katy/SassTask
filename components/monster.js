import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import egg from '../assets/Sassagotchi-egg-coloured.gif';
import teen from '../assets/SasSquash.gif';
import Sassquash from '../assets/SnapSquash.gif';

const monster = ({ imageSrc, setImageSrc, completedTasks }) => {

  const monsterPicker = () => {
    if(completedTasks.length >= 3) {
      return setImageSrc(require('../assets/SnapSquash.gif'))
    } else if(completedTasks.length > 0) {
      return setImageSrc(require('../assets/SasSquash.gif'))
    } else {
      return setImageSrc(require('../assets/Sassagotchi-egg-coloured.gif'))
    }
  }

  return (
    <TouchableOpacity onPress={() => monsterPicker()}>
      <Image source={imageSrc}/>
    </TouchableOpacity>
  )
}

export default monster;
