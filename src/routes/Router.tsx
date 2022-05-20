import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {NotificationsScreen} from './screens/NotificationsScreen';
import {DetailsScreen} from './screens/DetailsScreen';

export type RootStackParamList = {
  Drawer: undefined;
  Details: {name: string};
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#550AB1',
        drawerActiveTintColor: '#550AB1',
        headerStyle: {
          backgroundColor: 'pink',
        },
        drawerStyle: {
          backgroundColor: 'pink',
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
export function Router() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
