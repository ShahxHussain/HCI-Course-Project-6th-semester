import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Logout = ({ navigation }) => {
  const handleLogout = () => {
    // Implement your logout logic here, for example, clearing tokens, redirecting to login screen, etc.
    alert('You have been logged out!');
    navigation.navigate('Login'); // Navigate to the login screen after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Logout;
