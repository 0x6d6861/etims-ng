import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import { User } from 'firebase/auth';
// import { IUser } from '../../api';
// import { appLocalStorage } from '../../../utils/app-storage.ts';

export interface AuthState {
    user: User | null,
    token: string | null
}

const initialState: AuthState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
          state.user = action.payload
        },
        loginUser: (state, action: PayloadAction<{user: User}>) => {
            state.user = action.payload.user;
        },
        logoutUser: (state) => {
            state.user = null
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, setToken } = authSlice.actions

export const getToken = (state: RootState) => state.auth.token
export const getUser = (state: RootState) => state.auth.user
export const isLoggedIn = (state: RootState) => !!state.auth.user
export default authSlice.reducer