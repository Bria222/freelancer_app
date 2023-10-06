import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import TokenDecoder from '../../../app/utils/TokenDecoder'
import { HandleAccount } from './AccountsSlice'

const token = localStorage.getItem('userToken')
const decode = token ? TokenDecoder(token) : null
const user_id = decode ? decode.user_id : null

const API_URL = 'https://auth.payhero.co.ke/auth/users/'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { dispatch }) => {
    const response = await axios.get(`${API_URL}${user_id}`, {
      headers: { 'x-auth-token': token },
    })
    dispatch(HandleAccount({ account_info: response.data.accounts, index: 0 }))

    return response.data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export default userSlice.reducer
