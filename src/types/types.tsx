import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RouteParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Contacts: undefined;
  Chats: undefined;
};

export type SingUpScreenProps = NativeStackScreenProps<
  RouteParamList,
  'SignUp'
>;
export type SingInScreenProps = NativeStackScreenProps<
  RouteParamList,
  'SignIn'
>;
export type ContactsScreenProps = BottomTabNavigationProp<
  RouteParamList,
  'Contacts'
>;
export type ChatsScreenProps = BottomTabNavigationProp<RouteParamList, 'Chats'>;
