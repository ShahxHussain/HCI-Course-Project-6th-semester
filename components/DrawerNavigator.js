import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTab from '../components/Bottomtab'; // Make sure this path is correct
import RegisterScreen from '../Pages/Signup';
import LoginScreen from '../Pages/Login';
import Instructions from '../Pages/Instructions';
import Logout from '../Pages/Logout';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={BottomTab} 
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="log-in-outline" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="person-add-outline" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Instructions" 
        component={Instructions}  
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Logout" 
        component={Logout}  
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="log-out-outline" color={color} size={size} />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
