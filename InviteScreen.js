import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InviteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invite bees and get more HONEY</Text>
      <Text style={styles.description}>Tap on the button to invite your friends</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INVITE BEES</Text>
      </TouchableOpacity>
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
  description: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});

export default InviteScreen;


