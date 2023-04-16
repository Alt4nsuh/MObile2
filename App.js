import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/navigation/Appnavigator'
import { View } from 'react-native';
import { initializeApp } from "firebase/app";

export default function App() {

  return (
    <View>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
  }




  