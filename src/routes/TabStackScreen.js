import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../screens/ContactScreen';
import ChatsScreen from '../screens/ChatsScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 65, paddingVertical: 10},
      }}>
      <Tab.Group
        screenOptions={{
          tabBarActiveTintColor: '#FF9134',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '500',
            paddingBottom: 5,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            tabBarIcon: ({color, focused, size}) => (
              <Feather name="users" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
          options={{
            tabBarIcon: ({color, focused, size}) => (
              <Ionicons name="chatbubble-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
