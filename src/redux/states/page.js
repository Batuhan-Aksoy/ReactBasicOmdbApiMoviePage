import { createSlice } from '@reduxjs/toolkit'

export const page = createSlice({
  name: 'page',
  initialState: {
    darkMode : false,
    language : "tr"
  },
  reducers: {
    modeSet: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { modeSet, setLanguage} = page.actions

export default page.reducer