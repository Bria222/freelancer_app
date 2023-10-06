import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { authApi } from './services/auth/authService'
import { apiSlice } from '../features/slices/api/apiSlice'
import userReducer from '../features/slices/user/userSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export default store
