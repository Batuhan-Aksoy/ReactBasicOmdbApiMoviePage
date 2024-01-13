import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('auth') ?? false
  },
  reducers: {
    login: (state,action) => {
      localStorage.setItem('auth',action.payload);
      state.user = action.payload
    },
    logout: (state) => {
      localStorage.removeItem('auth');
      state.user = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout} = auth.actions

export default auth.reducer