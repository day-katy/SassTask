
import React from 'react';
import TaskScreen from './screens/TaskScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
    return <SafeAreaProvider><TaskScreen/></SafeAreaProvider>;
    
};

