import * as React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTab from '../components/Bottomtab'; // Make sure this path is correct
import RegisterScreen from '../Pages/Signup';
import LoginScreen from '../Pages/Login';
import Instructions from '../Pages/Instructions';
import Logout from '../Pages/Logout';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ShahxHussain/HCI-Course-Project-6th-semester')} style={styles.linkWrapper}>
          <Icon name="document-text-outline" color="#007AFF" size={20} />
          <Text style={styles.linkText}>Documentation</Text>
        </TouchableOpacity>
        <Text style={styles.madeBy}>Made by ShahxHussain with ❤️</Text>
        <Text style={styles.version}>Version 1.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    marginTop: 330,
    marginBottom: 0,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
    marginLeft: 5,
  },
  version: {
    position: 'relative',
    top: 10,
    fontSize: 12,
    color: '#95a5a6',
  },
  madeBy: {
    position: 'relative',
    top: 10,
    fontSize: 12,
    color: '#95a5a6',
  },
});

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
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
