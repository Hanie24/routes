import * as React from 'react';
import { Text, View } from 'react-native';
import ComponentButton from '../components/ComponentButton';
import { stylesScreen } from './ScreenStyle';

export default function Home({navigation}) {
  return (
    <View style={stylesScreen.container}>
        <Text>Hola Ana!</Text>
        <ComponentButton
        title="Ver Acerca de..."
        onPress={() => {
            navigation.navigate('AboutUs');
          }}
        />
        <ComponentButton
            title="Ir a Contacto"
            onPress={() => {
                navigation.navigate('Contact');
            }}
        />
    </View>
  );
}