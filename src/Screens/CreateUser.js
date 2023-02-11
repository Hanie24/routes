import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput, View, Button, ScrollView } from "react-native";
import { collection, addDoc } from "firebase/firestore";

import ComponentButton from "../components/ComponentButton";
import { stylesScreen } from "./ScreenStyle";

import { database } from "../data/firebase";

export default function CreateUser({ navigation }) {
  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log("no chido");

  useEffect(() => {
    console.log("chido");
    const addData = async () => {
      try {
        const docRef = await addDoc(collection(database, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    addData();
  }, []);

  const handleChangeDtata = (name, value) => {
    setDataUser({ ...dataUser, [name]: value });
  };

  const CreateNewUser = async () => {
    await firebase.firestore.collection("users").add({
      name: dataUser.name,
      email: dataUser.email,
      phone: dataUser.phone,
    });
    alert("Guardado!");
  };

  return (
    <ScrollView>
      <View style={stylesScreen.container}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => {
            handleChangeDtata("name", value);
          }}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(value) => {
            handleChangeDtata("email", value);
          }}
        />
        <TextInput
          placeholder="Teléfono"
          onChangeText={(value) => {
            handleChangeDtata("phone", value);
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
