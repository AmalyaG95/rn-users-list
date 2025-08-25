type TUser = {
  id: string;
  name: string;
};

type TUsersState = {
  users: TUser[];
  currentUser: TUser | null;
};

type TRenamePayload = {
  userId: string;
  newName: string;
};

type TDeletePayload = Omit<TRenamePayload, 'newName'>;

export type { TUser, TUsersState, TRenamePayload, TDeletePayload };
