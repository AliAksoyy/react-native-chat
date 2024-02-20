import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginProvider, useLoginContext} from './src/context/LoginContext';
import AuthStackScreen from './src/routes/AuthStackScreen';
import TabStackScreen from './src/routes/TabStackScreen';

export default function App() {
  const {login} = useLoginContext();
  console.log(false);

  return (
    <LoginProvider>
      <NavigationContainer>
        {!login ? <AuthStackScreen /> : <TabStackScreen />}
      </NavigationContainer>
    </LoginProvider>
  );
}
