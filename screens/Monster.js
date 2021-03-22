import React, {useState} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../Styles/stylesheet';

const Monster = () => {
  return (
    <View style={styles.monster}>
      <Image source={require('../assets/SasSquash.gif')}/>
    </View>
  )
};

export default Monster;
