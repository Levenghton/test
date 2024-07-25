import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [balance, setBalance] = useState(3873);
  const [animations, setAnimations] = useState([]);
  
  const handlePress = () => {
    setBalance(balance + 1);
    const newAnimation = {
      id: Date.now(),
      animatedValue: new Animated.Value(0),
    };

    setAnimations((prevAnimations) => [...prevAnimations, newAnimation]);

    Animated.timing(newAnimation.animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => {
      setAnimations((prevAnimations) =>
        prevAnimations.filter((animation) => animation.id !== newAnimation.id)
      );
    });
  };

  const generateRandomOffset = () => {
    const x = Math.random() * 100 - 50; // Random value between -50 and 50
    const y = Math.random() * -100 - 20; // Random value between -20 and -120
    return { x, y };
  };

  return (
    <View style={styles.container}>
      <Ionicons name="ios-beer" size={50} color="#FFD700" style={styles.beeIcon} />
      <Text style={styles.balance}>{balance} HONEY</Text>
      {animations.map(({ id, animatedValue }) => {
        const { x, y } = generateRandomOffset();
        const animatedStyle = {
          opacity: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          transform: [
            { translateX: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, x] }) },
            { translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, y] }) },
          ],
        };

        return (
          <Animated.View key={id} style={[styles.increment, animatedStyle, { left: '50%', top: '80%' }]}>
            <Text style={styles.incrementText}>+1</Text>
          </Animated.View>
        );
      })}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.honeyButton} onPress={handlePress}>
          <Text style={styles.honeyButtonText}>HONEY</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONNECT WALLET</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>JOIN</Text>
      </TouchableOpacity>
      <View style={styles.rewards}>
        <Text style={styles.rewardText}>Your rewards:</Text>
        <Text style={styles.rewardText}>Hive Age: +3,573 HONEY</Text>
        <Text style={styles.rewardText}>Honey Premium: +300 HONEY</Text>
      </View>
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
  beeIcon: {
    position: 'absolute',
    top: 40,
  },
  balance: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  honeyButton: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 20,
    alignItems: 'center',
  },
  honeyButtonText: {
    color: '#1E1E1E',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  increment: {
    position: 'absolute',
  },
  incrementText: {
    color: '#FFD700',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  rewards: {
    marginTop: 20,
    alignItems: 'center',
  },
  rewardText: {
    color: '#FFD700',
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'Roboto',
  },
});

export default ProfileScreen;

