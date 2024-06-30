import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../components/DrawerNavigator'; // Ensure correct path to DrawerNavigator
import VideoScreen from '../components/VideoScreen'; // Ensure correct path to VideoScreen
import BottomTab from '../components/Bottomtab'; // Ensure correct path to BottomTab

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      </Stack.Navigator>
   
  );
}
