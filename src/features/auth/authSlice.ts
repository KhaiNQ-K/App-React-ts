import { User } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
export interface LoginPayload {
  username: string;
  password: string;
}
interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, actions: PayloadAction<User>) {
      state.logging = false;
      state.isLoggedIn = true;

      state.currentUser = actions.payload;
    },
    loginFailed(state, actions: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});
//Actions
export const authActions = authSlice.actions;
//Selectors
export const selectAuthIsLoggedIn = (state: any) => state.auth.isLoggedIn;
// export const selectAuthIsLoggedIn = (state:any) => state.auth.isLoggedIn;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;
