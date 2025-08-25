import { useState, useRef, useCallback } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  findNodeHandle,
  AccessibilityInfo,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  addUser,
  deleteUser,
  renameUser,
  resetCurrentUser,
  selectCurrentUser,
} from '../features/users/users-slice';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import generateId from '../utils/generateId';
import { Button } from '../common';
import { UserFormScreenNavigationProp } from '../navigation/types';

const UserForm = () => {
  const navigation = useNavigation<UserFormScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const { id: currentUserId = '', name: userName = '' } = currentUser ?? {};
  const [name, setName] = useState(currentUser ? userName : '');
  const [isEditable, setIsEditable] = useState(!currentUser);
  const usernameInputRef = useRef<TextInput>(null);
  const rafRef = useRef<number | null>(null);

  useFocusEffect(
    useCallback(() => {
      const tag = findNodeHandle(usernameInputRef.current);

      if (tag) {
        AccessibilityInfo.setAccessibilityFocus(tag);
      }

      return () => {
        dispatch(resetCurrentUser());

        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const goBack = () => navigation.goBack();

  const handleAdd = () => {
    if (!name) return;

    const userData = {
      id: generateId(),
      name,
    };

    dispatch(addUser(userData));
    navigation.navigate('Users List');
  };

  const handleRename = () => {
    if (!currentUser || (isEditable && userName === name)) return;

    if (isEditable) {
      dispatch(renameUser({ userId: currentUserId, newName: name }));
      navigation.navigate('Users List');
    } else {
      setIsEditable(true);
      rafRef.current = requestAnimationFrame(() => {
        usernameInputRef.current?.focus();
      });
    }
  };

  const handleDelete = () => {
    if (!currentUser) return;

    dispatch(deleteUser({ userId: currentUserId }));
    navigation.navigate('Users List');
  };

  const handleSubmit = currentUser ? handleRename : handleAdd;
  const buttonText = currentUser ? 'Rename User' : 'Add';

  return (
    <>
      {!!currentUser && (
        <Button
          title="Back"
          onPress={goBack}
          buttonStyle={{
            width: 80,
            margin: 20,
            borderWidth: 1,
            borderColor: 'grey',
            backgroundColor: 'transparent',
            elevation: 0,
          }}
          textStyle={{ color: 'black', fontWeight: 500 }}
        />
      )}

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {currentUser && <Text style={styles.label}>Username</Text>}
          <TextInput
            style={[styles.input, !isEditable && styles.disabledInput]}
            value={name}
            onChangeText={setName}
            placeholder="Enter username"
            editable={isEditable}
            ref={usernameInputRef}
          />
        </View>

        <View style={styles.actionsWrapper}>
          <Button title={buttonText} onPress={handleSubmit} />

          {!!currentUser && (
            <Button
              title="Delete User"
              onPress={handleDelete}
              buttonStyle={{ backgroundColor: 'grey' }}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    gap: 15,
  },
  inputContainer: {
    gap: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#353232',
    borderRadius: 5,
    padding: 10,
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
  },
  actionsWrapper: {
    gap: 10,
  },
});
