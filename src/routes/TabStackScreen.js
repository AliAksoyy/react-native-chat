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
    <Tab.Navigator>
      <Tab.Screen
        name="Contacts"
        component={ContactScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => (
            <TouchableOpacity>
              <Feather name="users" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => (
            <TouchableOpacity>
              <Ionicons name="chatbubble-outline" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
