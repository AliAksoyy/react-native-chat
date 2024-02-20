import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginProvider} from './src/context/LoginContext';
import AuthStackScreen from './src/routes/AuthStackScreen';

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </LoginProvider>
  );
}
