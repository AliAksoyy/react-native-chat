import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginProvider} from './context/LoginContext';
import AuthStackScreen from './routes/AuthStackScreen';

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </LoginProvider>
  );
}
