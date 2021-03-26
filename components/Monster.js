import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, ImageBackground} from 'react-native';
import styles from '../Styles/stylesheet';

export const monster = ({ imageSrc, setImageSrc, completedTasks, rating, setRating, setMessage, monsterSays, setMonsterSays }) => {

  const [monsterStyle, setMonsterStyle] = useState(styles.monsterSmall)

  const [famIndex, setFamIndex] = useState(0)

  let firstFam = [require('../assets/Sassagotchi-ghost.gif'), require('../assets/Sassagotchi-egg-dying.gif'), require('../assets/Sassagotchi-egg-coloured.gif'), require('../assets/Sassagotchi-final-egg.gif'), require('../assets/SasSquash.gif'), require('../assets/SnapSquash.gif'), require('../assets/Ascended-Snapsquash.gif')]
  let secondFam = [require('../assets/purpleMonster/ghost.gif'), require('../assets/purpleMonster/egg-rotting.gif'), require('../assets/purpleMonster/egg-stage-1.gif'), require('../assets/purpleMonster/egg-stage-2.gif'), require('../assets/purpleMonster/Sass-1.gif'), require('../assets/purpleMonster/Sass-2.gif'), require('../assets/purpleMonster/Sass-final.gif')]
  // let famIndex1 = 0
  let famIndex2 = 2
  let families = [firstFam, secondFam]

  const talkArray = ["'Stop touching me. You're gross'", "'What?'", "'Why are you bothering me?'", "'Your fingers are huge. Get them away from me.'", "'NO NO GET AWAY!'"];

  const resetResponse = ["Err did you just try and kill me?", "Stop pressing that", "Why would you try and reset me?"]


  const monsterPicker = () => {
    if (rating == 4){
      setMonsterStyle(styles.monsterLarge)
      setImageSrc(families[famIndex][famIndex2 += 4])
      setMessage("'Your efforts have allowed me to ascend. I can go no further. Click reset to try again with a new Sasscot...'")
    }
    // else if(rating >7) {
    //       setMonsterStyle(styles.monsterLarge)
    //       setImageSrc(families[famIndex][famIndex2 += 3])
    //   }
      else if(rating == 3) {
          setMonsterStyle(styles.monsterLarge)
          setImageSrc(families[famIndex][famIndex2 += 3])
      }
      // else if(rating == 3) {
      //   setMonsterStyle(styles.monsterSmall)
      //   setImageSrc(families[famIndex][famIndex2 += 3])
      // }
      // else if(rating >4) {
      //   setMonsterStyle(styles.monsterLarge)
      //   setImageSrc(families[famIndex][famIndex2 += 2])
      // }
      else if(rating == 2) {
        setMonsterStyle(styles.monsterMedium)
        setImageSrc(families[famIndex][famIndex2 += 2])
      }
      // else if(rating ==2) {
      //   setMonsterStyle(styles.monsterSmall)
      //   setImageSrc(families[famIndex][famIndex2 += 2])
      // }
       else if (rating == 1) {
        setMonsterStyle(styles.monsterMedium)
        setImageSrc(families[famIndex][famIndex2 += 1])
      }
      // else if (rating > 0) {
      //   setMonsterStyle(styles.monsterMedium)
      //   setImageSrc(families[famIndex][famIndex2])
      // }
      else if (rating == 0) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(families[famIndex][famIndex2])
      } else if (rating == -1) {
        setMonsterStyle(styles.monsterSmall)
        setImageSrc(families[famIndex][famIndex2 -= 1])
      }
       else if (rating == -2) {
        setMonsterStyle(styles.monsterSmall)
        setMessage("You killed me! Click reset to try again")
        setImageSrc(families[famIndex][famIndex2 -= 2])
      }

  }

  const resetButton = () => {
    console.log(firstFam[0])
    if(rating >= 4) {
      setRating(0)
      setMessage("Congratulations. Here is a new monster for you to try with...")
      setMonsterStyle(styles.monsterSmall)
      if(famIndex == 0){
        setFamIndex(1)
      } else if (famIndex == 1){
        setFamIndex(0)
      }
      setImageSrc(families[famIndex][famIndex2])
    } else if(rating > -2 && rating < 4) {
      setMessage(resetResponse[Math.floor(Math.random()*resetResponse.length)])
    } else if(rating <= -2){
      setRating(0)
      setMessage("'You have been given another chance... don't mess it up'")
      setMonsterStyle(styles.monsterSmall)
      if(famIndex == 0){
        setFamIndex(1)
      } else if (famIndex == 1){
        setFamIndex(0)
      }
      setImageSrc(families[famIndex][famIndex2])
    }
  }

  const monsterTalk = () => {
    return setMonsterSays(talkArray[Math.floor(Math.random()*talkArray.length)]);
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
            <Button title='Reset' onPress={() => resetButton()}/>
          </View>
          <View style={styles.evolveButton}>
            <Button title='Evolve' onPress={() => monsterPicker()} />
          </View>
      </View>
    </View>
  )
}


export default monster;
