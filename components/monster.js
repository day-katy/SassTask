import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import egg from '../assets/Sassagotchi-egg-coloured.gif';
import teen from '../assets/SasSquash.gif';
import Sassquash from '../assets/SnapSquash.gif';
import styles from '../Styles/stylesheet';

const monster = ({ imageSrc, setImageSrc, completedTasks, rating, setRating, setMessage }) => {

  const [monsterStyle, setMonsterStyle] = useState(styles.monsterSmall)

  const monsterPicker = () => {
      if(rating >7) {
          setMonsterStyle(styles.monsterLarge)
          setImageSrc(require('../assets/SnapSquash.gif'))
      } else if(rating >6) {
          setMonsterStyle(styles.monsterMedium)
          setImageSrc(require('../assets/SnapSquash.gif'))
      } else if(rating >5){
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(require('../assets/SnapSquash.gif'))
      } else if(rating >4) {
        setMonsterStyle(styles.monsterLarge)
        setImageSrc(require('../assets/SasSquash.gif'))
      } else if(rating >3) {
        setMonsterStyle(styles.monsterMedium)
        setImageSrc(require('../assets/SasSquash.gif'))
      } else if(rating >2) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(require('../assets/SasSquash.gif'))
      } else if (rating > 1) {
        setMonsterStyle(styles.monsterLarge)
        setImageSrc(require('../assets/Sassagotchi-final-egg.gif'))
      } else if (rating > 0) {
        setMonsterStyle(styles.monsterMedium)
        setImageSrc(require('../assets/Sassagotchi-egg-coloured.gif'))
      } else if (rating == 0) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(require('../assets/Sassagotchi-egg-coloured.gif'))
      } else if (rating < 0 && rating > -2) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(require('../assets/Sassagotchi-egg-dying.gif'))
      }
       else if (rating < -2) {
        setMonsterStyle(styles.monsterSmall)
        setMessage("You killed me! Click reset to try again")
        setImageSrc(require('../assets/Sassagotchi-ghost.gif'))
      }

  }

  const resetButton = () => {
    if(rating > -2) {
      setMessage('You must live with your choices')
    } else {
      setRating(0)
      setMessage("You have been given another chance... don't mess it up")
      setImageSrc(require('../assets/Sassagotchi-egg-coloured.gif'))
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={() => monsterPicker()}>
        <Image source={imageSrc} style={monsterStyle}/>
      </TouchableOpacity>
      <View>
        <Button title='Reset Monster' onPress={() => resetButton()}/>
      </View>
    </View>
  )
}


export default monster;
