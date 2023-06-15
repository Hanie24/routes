import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import { stylesScreen } from './ScreenStyle';
import ComponentButton from '../components/ComponentButton';

import firebase from '../data/firebase';
import { collection, getDocs, getFirestore } from '@firebase/firestore';

export default function UserDetails({navigation}) {
  
  const queryGetUser = async () => {
    const dataBase = getFirestore(firebase);
    const data = await getDocs(collection(dataBase, 'users'));
    data.forEach((doc) => {
      console.table(doc.data());
    })
  }

  queryGetUser();

  return (
    <View style={stylesScreen.container}>
      
    </View>
  );
}