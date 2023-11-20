import { createSlice } from '@reduxjs/toolkit';
import UserModel from '../../models/user';

export const UserEmptyState:UserModel = {} as UserModel;

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
      createUser: (state, action) => {
        return action.payload;
      },
      modifyUser: (state, action) => {
        return { ...state, ...action.payload };
      },
      resetUser: () => {
        return UserEmptyState;
      }
    }
  });
  
  export const { createUser, modifyUser, resetUser } = userSlice.actions;