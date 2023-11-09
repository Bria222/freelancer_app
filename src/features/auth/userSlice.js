import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const API_ENDPOINT = 'http://localhost:5000/api/users/me'

export const fetchUser = createAsyncThunk('users/fetchUser', async (token) => {
  const response = await fetch(API_ENDPOINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch User')
  }

  const data = await response.json()
  return data
})

const Userlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default Userlice.reducer
