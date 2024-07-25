import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checking your hive</Text>
      <Text style={styles.step}>Wing Span Measured</Text>
      <ActivityIndicator size="small" color="#FFD700" />
      <Text style={styles.step}>Stinger Length Verified</Text>
      <ActivityIndicator size="small" color="#FFD700" />
      <Text style={styles.step}>Honey Pot Size Checked</Text>
      <ActivityIndicator size="small" color="#FFD700" />
      <Text style={styles.step}>Beehive Vibes Analyzed</Text>
      <ActivityIndicator size="small" color="#FFD700" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  step: {
    fontSize: 18,
    color: '#FFD700',
    marginVertical: 10,
    fontFamily: 'Roboto',
  },
});

export default OnboardingScreen;



