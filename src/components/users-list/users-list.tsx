import { FlatList } from 'react-native';
import { useAppSelector } from '../../app/hooks';
import { selectUsers } from '../../features/users/users-slice';
import User from './user';
import { NoData } from '../../common';

const EmptyList = () => <NoData data="users" />;

const UserList = () => {
  const users = useAppSelector(selectUsers);

  return (
    <FlatList
      data={users}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <User {...item} />}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default UserList;
