import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, PermissionsAndroid, Platform } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
 

export default function StepsCounts() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
          {
            title: 'Activity Recognition Permission',
            message: 'This app needs access to your activity to count your steps.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Step counting may not work properly without this permission.');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    const subscribe = async () => {
      await requestPermissions();
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));

      if (isAvailable) {
        const subscription = Pedometer.watchStepCount(result => {
          setCurrentStepCount(result.steps);
        });
        return subscription;
      }
    };

    loadFonts();

    let subscription;
    subscribe().then(sub => {
      subscription = sub;
    });

    return () => {
      if (subscription && typeof subscription.remove === 'function') {
        subscription.remove();
      }
    };
  }, []);

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="walk" size={100} color="dodgerblue" />
      </View>
      <Text style={styles.title}>Step Counter</Text>
      <Text style={styles.description}>Track your daily steps and stay active!</Text>
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>{currentStepCount}</Text>
        <Text style={styles.stepLabel}>steps today</Text>
      </View>
      <Text style={styles.status}>Pedometer Available: {isPedometerAvailable}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    color: 'dodgerblue',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: 'gray',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  stepContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  stepText: {
    fontSize: 48,
    fontFamily: 'Roboto-Bold',
    color: 'black',
  },
  stepLabel: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: 'gray',
  },
  status: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: 'gray',
  },
});
