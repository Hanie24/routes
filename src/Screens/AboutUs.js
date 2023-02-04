import * as React from 'react';
import { Text, View } from 'react-native';
import { stylesScreen } from './ScreenStyle';
import ComponentButton from '../components/ComponentButton';

export default function AboutUs({navigation}) {
  return (
    <View style={stylesScreen.container}>
      <Text>About Us!</Text>
      <ComponentButton title="Ir a atras" onPress={() => navigation.goBack()} />
    </View>
  );
}