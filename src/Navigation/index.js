import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserList from '../Screens/UserList';
import UserDetails from '../Screens/UserDetails';
import CreateUser from '../Screens/CreateUser';
import ImageViewer from '../components/Image/ImageViewer';

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserList'>
        <Stack.Screen 
          name="UserList" 
          component={UserList}
          options={{ 
            title: 'Lista de Usuarios',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
          />
        <Stack.Screen 
          name="CreateUser" 
          component={CreateUser} 
          options={{ title: 'Crear Usuario' }}/>
        <Stack.Screen 
          name="UserDetails" 
          component={UserDetails}
          options={{ title: 'Detalle de usuario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
