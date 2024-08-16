import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "../../models/auth.model";
import { getUserFromLocalStorage } from "../../services/persistUser.service";
import { RootState } from "../store";

export interface AuthState {
    userInfo: Auth | undefined;
}

const initialState: AuthState = {
    userInfo: getUserFromLocalStorage(),
};

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        login(state, action: PayloadAction<Auth>) {
            state.userInfo = action.payload;
        },
        logout(state) {
            localStorage.removeItem('user_info');
            state.userInfo = undefined;
        },
    },
});

export const { login, logout } = authenticationSlice.actions;
export const selectAuth = (state: RootState): AuthState => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
