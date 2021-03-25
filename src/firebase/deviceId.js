import AsyncStorage from '@react-native-async-storage/async-storage';

_storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (error) {
   console.error("there is an error in _storeData")
  }
};

_retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
      return value
  } catch (error) {
    console.error("there is an error in _retrieveData")
  }
};

const createUid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

 export async function returnDeviceId(){
  //check if id exists 
    var value = await _retrieveData("uniqueDeviceId")
 //if it does not exist, create a new one and store it
    if (value === null) {
      var uniqueId = createUid()
      await  _storeData("uniqueDeviceId", uniqueId)
      return uniqueId
    }
  //if it does exist, return that value 
  else {
  return value 
  }

}





