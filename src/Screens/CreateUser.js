import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, View, Button, ScrollView } from 'react-native';

import ComponentButton from "../components/ComponentButton";
import { stylesScreen } from './ScreenStyle';

import firebase from '../data/firebase';
import 'firebase/firestore';

export default function CreateUser({navigation}) {

  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChangeDtata = (name, value) => {
    setDataUser({...dataUser, [name]: value})
  }

  const CreateNewUser = async () => {
    await firebase.firestore.collection('users').add({
      name: dataUser.name,
      email: dataUser.email,
      phone: dataUser.phone
    });
    alert('Guardado!')
  }

  return (
    <ScrollView>
      <View style={stylesScreen.container}>
          <TextInput 
            placeholder="Nombre" 
            onChangeText={(value) => {
            handleChangeDtata('name', value)
            }}
          />
          <TextInput 
            placeholder="Email"
            onChangeText={(value) => {
              handleChangeDtata('email', value)
            }}
          />
          <TextInput 
            placeholder="Teléfono"
            onChangeText={(value) => {
              handleChangeDtata('phone', value)
            }}
          />
      </View>
      <View>
        <ComponentButton
          title="Guardar usuario"
          onPress={() => {
            CreateNewUser();
          }}
        />
      </View>
    </ScrollView>
  );
}