import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../components/Logo'; // Ensure this path is correct

const Instructions = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Instructions</Text>
      <View style={styles.instructionContainer}>
        <Ionicons name="barbell-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.instruction}>Click on "Ask Coach" on BottomTab to interact with Health/Fitness AI Coach.</Text>
      </View>
      <View style={styles.instructionContainer}>
        <Ionicons name="camera-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.instruction}>Click on "Improve Form" on BottomTab and proceed. Give camera permission to use the trained AI model to help you correct your exercise posture.</Text>
      </View>
      <View style={styles.instructionContainer}>
        <Ionicons name="walk-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.instruction}>Click on "Step Counts" option to get real-time footstep insights.</Text>
      </View>
      <Text style={styles.version}>Version 1.0</Text>
      <Text style={styles.madeBy}>Made by ShahxHussain with ❤️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333', // Dark gray title color
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  instruction: {
    fontSize: 18,
    textAlign: 'left',
    flexWrap: 'wrap',
    flex: 1,
  },

  version: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#95a5a6',
  },
  madeBy: {
    position: 'absolute',
    bottom: 5,
    fontSize: 12,
    color: '#95a5a6',
  },
});

export default Instructions;
