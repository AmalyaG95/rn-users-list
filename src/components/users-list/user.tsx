import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TUser } from '../../features/users/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUsers, setCurrentUser } from '../../features/users/users-slice';
import { HomeScreenNavigationProp } from '../../navigation/types';

const User = ({ id, name }: TUser) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const handleSeeDetails = (userId: string) => {
    const selectedUser = users.find(({ id }) => id === userId)!;
    navigation.navigate('User Details');
    dispatch(setCurrentUser(selectedUser));
  };

  return (
    <Pressable style={styles.userItem} onPress={() => handleSeeDetails(id)}>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
});
