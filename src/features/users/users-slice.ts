import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TRenamePayload, TUsersState, TDeletePayload } from './types';

const initialState: TUsersState = {
  users: [],
  currentUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUser>) => {
      state.users.push(action.payload);
    },
    setCurrentUser: (state, action: PayloadAction<TUser>) => {
      state.currentUser = action.payload;
    },
    resetCurrentUser: state => {
      state.currentUser = null;
    },
    renameUser: (state, action: PayloadAction<TRenamePayload>) => {
      const { userId, newName } = action.payload;
      const userData = state.users.find(user => user.id === userId) as TUser;

      userData.name = newName;
    },
    deleteUser: (state, action: PayloadAction<TDeletePayload>) => {
      const { userId } = action.payload;

      state.users = state.users.filter(user => user.id !== userId);
    },
  },
  selectors: {
    selectUsers: ({ users }) => users,
    selectCurrentUser: ({ currentUser }) => currentUser,
  },
});

export const {
  addUser,
  setCurrentUser,
  resetCurrentUser,
  renameUser,
  deleteUser,
} = usersSlice.actions;
export const { selectUsers, selectCurrentUser } = usersSlice.selectors;

export default usersSlice.reducer;
