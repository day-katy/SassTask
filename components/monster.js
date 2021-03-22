import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import egg from '../assets/Sassagotchi-egg-coloured.gif';
import teen from '../assets/SasSquash.gif';
import Sassquash from '../assets/SnapSquash.gif';

const monster = ({imageSrc}) => {

  // const [imageSrc, setImageSrc] = useState(require('../assets/Sassagotchi-egg-coloured.gif'))

  // const monsterPicker = () => {
  //   if(completedTasks.length >= 3) {
  //     setImageSrc('../assets/SnapSquash.gif')
  //   } else if(completedTasks >= 1) {
  //     setImageSrc('../assets/SasSquash.gif')
  //   } else {
  //     setImageSrc('../assets/Sassagotchi-egg-coloured.gif')
  //   }
  // }

  return (
    <View>
      <Image source={imageSrc}/>
    </View>
  )
}

export default monster;
