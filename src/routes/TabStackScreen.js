import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../screens/ContactScreen';
import ChatsScreen from '../screens/ChatsScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    // dispatch(signOutAction());
    navigation.navigate('SignIn'); 
  };

  return <TouchableOpacity onPress={handleLogout}></TouchableOpacity>;
};

export default function TabStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 65, paddingVertical: 10},
      }}>
      <Tab.Group
        screenOptions={{
          tabBarActiveTintColor: '#FF9134',
          tabBarInactiveTintColor: '#2e2c2c',
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
        <Tab.Screen
          name="Logout"
          component={LogoutButton}
          options={{
            tabBarIcon: ({color, focused, size}) => (
              <Ionicons name="log-out" size={size} color={color} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
