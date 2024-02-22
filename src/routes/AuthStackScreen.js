import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import MessageDetails from '../screens/MessageDetails';
import TabStackScreen from './TabStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {getProfileAction} from '../features/authSlice/asynActions';

const Stack = createNativeStackNavigator();

export default function AuthStackScreen() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    const getToken = async () => {
      try {
        setLoading(true);
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        if (token) {
          dispatch(getProfileAction());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getToken();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Stack.Navigator>
      {!user ? (
        <>
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
        </>
      ) : (
        <>
          <Stack.Screen
            name="BottomTab"
            component={TabStackScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Message"
            component={MessageDetails}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
