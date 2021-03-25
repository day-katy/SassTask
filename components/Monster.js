import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, ImageBackground} from 'react-native';
import styles from '../Styles/stylesheet';

export const monster = ({ imageSrc, setImageSrc, completedTasks, rating, setRating, setMessage }) => {

  const [monsterStyle, setMonsterStyle] = useState(styles.monsterSmall)

  const [famIndex, setFamIndex] = useState(0)

  let firstFam = [require('../assets/Sassagotchi-ghost.gif'), require('../assets/Sassagotchi-egg-dying.gif'), require('../assets/Sassagotchi-egg-coloured.gif'), require('../assets/Sassagotchi-final-egg.gif'), require('../assets/SasSquash.gif'), require('../assets/SnapSquash.gif'), require('../assets/Ascended-Snapsquash.gif')]
  let secondFam = [require('../assets/purpleMonster/ghost.gif'), require('../assets/purpleMonster/egg-rotting.gif'), require('../assets/purpleMonster/egg-stage-1.gif'), require('../assets/purpleMonster/egg-stage-2.gif'), require('../assets/purpleMonster/Sass-1.gif'), require('../assets/purpleMonster/Sass-2.gif'), require('../assets/purpleMonster/Sass-final.gif')]
  // let famIndex1 = 0
  let famIndex2 = 2
  let families = [firstFam, secondFam]




  const monsterPicker = () => {
    if (rating > 10){
      setMonsterStyle(styles.monsterLarge)
      setImageSrc(families[famIndex][famIndex2 += 4])
      setMessage('Your efforts have allowed me to ascend. I can go no further. Click reset to try again with a new Sasscot...')
    } else if(rating >7) {
          setMonsterStyle(styles.monsterLarge)
          setImageSrc(families[famIndex][famIndex2 += 3])
      } else if(rating >6) {
          setMonsterStyle(styles.monsterMedium)
          setImageSrc(families[famIndex][famIndex2 += 3])
      } else if(rating >5) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(families[famIndex][famIndex2 += 3])
      } else if(rating >4) {
        setMonsterStyle(styles.monsterLarge)
        setImageSrc(families[famIndex][famIndex2 += 2])
      } else if(rating >3) {
        setMonsterStyle(styles.monsterMedium)
        setImageSrc(families[famIndex][famIndex2 += 2])
      } else if(rating >2) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(families[famIndex][famIndex2 += 2])
      } else if (rating > 1) {
        setMonsterStyle(styles.monsterLarge)
        setImageSrc(families[famIndex][famIndex2 += 1])
      } else if (rating > 0) {
        setMonsterStyle(styles.monsterMedium)
        setImageSrc(families[famIndex][famIndex2])
      } else if (rating == 0) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(families[famIndex][famIndex2])
      } else if (rating < 0 && rating > -2) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(families[famIndex][famIndex2 -= 1])
      }
       else if (rating < -2) {
        setMonsterStyle(styles.monsterSmall)
        setMessage("You killed me! Click reset to try again")
        setImageSrc(families[famIndex][famIndex2 -= 2])
      }

  }

  const resetButton = () => {
    console.log(firstFam[0])
    if(rating > 10) {
      setRating(0)
      setImageSrc(families[famIndex][famIndex2])
      setMessage("Congratulations. Here is a new monster for you to try with...")
      setMonsterStyle(styles.monsterSmall)
      if(famIndex == 0){
        setFamIndex(1)
      } else if (famIndex == 1){
        setFamIndex(0)
      }
    } else if(rating > -2) {
      setMessage('You must live with your choices')
    } else {
      setRating(0)
      setImageSrc(families[famIndex][famIndex2])
      setMessage("You have been given another chance... don't mess it up")
      setMonsterStyle(styles.monsterSmall)
      if(famIndex == 0){
        setFamIndex(1)
      } else if (famIndex == 1){
        setFamIndex(0)
      }
    }
  }

  const monsterTalk = () => {
    const talkArray = ["'Stop touching me. You're' gross'", "'What?'", "'Why are you bothering me?'", "'Your fingers are huge. Get them away from me.'", "'NO NO GET AWAY!'"];
    return setMessage(talkArray[Math.floor(Math.random()*talkArray.length)]);
  }

  return (
    <View>
      <ImageBackground source={require('../assets/green-background.jpg')} style={styles.background}>
        <TouchableOpacity onPress={() => monsterTalk()}>
          <Image source={imageSrc} style={monsterStyle}/>
        </TouchableOpacity>
      </ImageBackground>
      <View styles={styles.monsterButtons}>
        <View  style={styles.resetButton}>
          <Button title='Reset Monster' onPress={() => resetButton()}/>
        </View>
        <View style={styles.evolveButton}>
          <Button title='evolve Monster' onPress={() => monsterPicker()}/>
        </View>
      </View>
    </View>
  )
}


export default monster;
