import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginProvider} from './context/LoginContext';
import AuthStackScreen from './routes/AuthStackScreen';
import {store} from './app/store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <LoginProvider>
        <NavigationContainer>
          <AuthStackScreen />
          <Toast />
        </NavigationContainer>
      </LoginProvider>
    </Provider>
  );
}
