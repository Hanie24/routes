import * as React from 'react';
import Home from '../Screens/Home';
import AboutUs from '../Screens/AboutUs';
import Contact from '../Screens/Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ 
            title: 'Inicio',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }} 
          />
        <Stack.Screen 
          name="Contact" 
          component={Contact} 
          options={{ title: 'Contacto' }}/>
        <Stack.Screen 
          name="AboutUs" 
          component={AboutUs}
          options={{ title: 'Acerca de...' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
