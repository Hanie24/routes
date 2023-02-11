import React, {useState, useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View} from 'react-native';
import ComponentButton from '../components/ComponentButton';
import { stylesScreen } from './ScreenStyle';

export default function UserList({navigation}) {

  const [data, setData] = useState([]);

  async function loadData(){
    
  }

  return (
    <View style={stylesScreen.container}>
        <Text>Hola Ana!</Text>
        <ComponentButton
        title="Ver Acerca de..."
        onPress={() => {
            navigation.navigate('UserDetails');
          }}
        />
        <ComponentButton
            title="Ir a Contacto"
            onPress={() => {
                navigation.navigate('CreateUser');
            }}
        />
        <StatusBar style="auto" />
    </View>
  );
}