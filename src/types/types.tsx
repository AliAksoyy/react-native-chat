import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

export type RouteParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Contacts: undefined;
  Chats: undefined;
  BottomTab: undefined;
  Message: {
    item: {
      id: number;
      name: string;
      uri: ImageSourcePropType;
      subText: string;
      messageCount: number;
      lastSeen?: string;
    };
  };
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
export type MessageScreenProps = NativeStackScreenProps<
  RouteParamList,
  'Message'
>;

export type ChatsScreenProps = {
  navigation: BottomTabNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};
export type ContactsScreenProps = {
  navigation: BottomTabNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};
