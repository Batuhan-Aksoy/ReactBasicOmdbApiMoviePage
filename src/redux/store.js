import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './states/page'
import authReducer from './states/auth'

export default configureStore({
  reducer: {
    page : pageReducer,
    auth :authReducer
  },
})


