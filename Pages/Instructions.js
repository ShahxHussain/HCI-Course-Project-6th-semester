import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Logo from '../components/Logo'; // Ensure this path is correct

const Instructions = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Instructions</Text>
      <Text style={styles.instruction}>- 🏋️‍♂️ Click on "Ask Coach" on BottomTab to interact with Health/Fitness AI Coach.</Text>
      <Text style={styles.instruction}>- 📸 Click on "Improve Form" on BottomTab and proceed. Give camera permission to use the trained AI model to help you correct your exercise posture.</Text>
      <Text style={styles.instruction}>- 👟 Click on "Step Counts" option to get real-time footstep insights.</Text>
      {/* Add more instructions as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  instruction: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'left',
    width: '100%',
  },
});

export default Instructions;
