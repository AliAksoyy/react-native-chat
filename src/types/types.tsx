import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RouteParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Contacts: undefined;
};

export type SingUpScreenProps = NativeStackScreenProps<
  RouteParamList,
  'SignUp'
>;
export type SingInScreenProps = NativeStackScreenProps<
  RouteParamList,
  'SignIn'
>;
export type ContactsScreenProps = NativeStackScreenProps<
  RouteParamList,
  'Contacts'
>;
