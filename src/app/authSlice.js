import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  role: "",
  username: "",
  userId: 3,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;

      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("name", state.username);
      localStorage.setItem("id", state.username);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = "";
      state.username = "";
      console.log("logout action");
      localStorage.removeItem("username");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
