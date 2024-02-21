import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginProvider} from './context/LoginContext';
import AuthStackScreen from './routes/AuthStackScreen';
import {store} from './app/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <LoginProvider>
        <NavigationContainer>
          <AuthStackScreen />
        </NavigationContainer>
      </LoginProvider>
    </Provider>
  );
}
