import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RouteParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Contacts: undefined;
  Chats: undefined;
  BottomTab: undefined;
};

export type SingUpScreenProps = NativeStackScreenProps<
  RouteParamList,
  'SignUp'
>;
export type SingInScreenProps = NativeStackScreenProps<
  RouteParamList,
  'SignIn'
>;
export type BottomTabScreenProps = NativeStackScreenProps<
  RouteParamList,
  'BottomTab'
>;
export type ContactsScreenProps = BottomTabNavigationProp<
  RouteParamList,
  'Contacts'
>;
export type ChatsScreenProps = BottomTabNavigationProp<RouteParamList, 'Chats'>;
