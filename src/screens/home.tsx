import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { UsersList } from '../components';
import { Button } from '../common';
import { HomeScreenNavigationProp } from '../navigation/types';

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <UsersList />
      <Button
        title="Add User"
        onPress={() => navigation.navigate('Add User')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
  addUserButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 4,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  buttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
});
