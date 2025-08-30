import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  'Users List': undefined;
  'Add User': undefined;
  'User Details': undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Users List'
>;

type UserFormScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Add User' | 'User Details'
>;

export type {
  RootStackParamList,
  HomeScreenNavigationProp,
  UserFormScreenNavigationProp,
};
