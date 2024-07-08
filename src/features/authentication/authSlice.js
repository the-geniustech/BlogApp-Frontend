import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  currentUser: {},
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setIsAuth, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
