import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import { stylesScreen } from './ScreenStyle';

export default function Contact({navigation}) {
  return (
    <View style={stylesScreen.container}>
        <Text>Contact!</Text>
        <StatusBar style="auto" />
    </View>
  );
}