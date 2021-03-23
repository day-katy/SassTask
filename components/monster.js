import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import egg from '../assets/Sassagotchi-egg-coloured.gif';
import teen from '../assets/SasSquash.gif';
import Sassquash from '../assets/SnapSquash.gif';
import styles from '../Styles/stylesheet';

const monster = ({ imageSrc, setImageSrc, completedTasks, rating, setRating }) => {

  const [monsterStyle, setMonsterStyle] = useState(styles.monsterSmall)

  const monsterPicker = () => {
    if(rating >= 3) {
      return setImageSrc(require('../assets/SnapSquash.gif'))
    } else if(rating > 0) {
      return (
        setMonsterStyle(styles.monsterMedium)
        setImageSrc(require('../assets/SasSquash.gif'))
      )
    } else {
      return setImageSrc(require('../assets/Sassagotchi-egg-coloured.gif'))
    }
  }

  return (
    <TouchableOpacity onPress={() => monsterPicker()}>
      <Image source={imageSrc} style={monsterStyle}/>
    </TouchableOpacity>
  )
}

export default monster;
