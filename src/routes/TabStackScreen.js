import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../screens/ContactScreen';
import ChatsScreen from '../screens/ChatsScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../features/authSlice/asynActions';

const Tab = createBottomTabNavigator();

export default function TabStackScreen() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logoutAction());
  };
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
          component={View}
          options={{
            tabBarIcon: ({color, size}) => (
              <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="log-out" size={size} color={color} />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
