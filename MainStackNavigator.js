import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import OnboardingScreen from './OnboardingScreen';
import ProfileScreen from './ProfileScreen';
import LeaderboardScreen from './LeaderboardScreen';
import InviteScreen from './InviteScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Leaderboard') {
            iconName = 'trophy';
          } else if (route.name === 'Invite') {
            iconName = 'people';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFD700',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Invite" component={InviteScreen} />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;

