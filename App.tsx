import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import {RouteParamList} from './types/types';
import ContactScreen from './screens/ContactScreen';

const Stack = createNativeStackNavigator<RouteParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <Image
                    source={require('./assests/profile/ProfileImage1.png')}
                  />
                </TouchableOpacity>
              );
            },
            headerLeft: () => {
              return (
                <TouchableOpacity style={styles.headerLeft}>
                  <Image source={require('./assests/imgs/plus.png')} />
                </TouchableOpacity>
              );
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 23, fontWeight: '700'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerLeft: {padding: 6, backgroundColor: '#fafafa'},
});
