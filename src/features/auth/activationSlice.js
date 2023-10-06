import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const activateAccount = createAsyncThunk(
  'activation/activateAccount',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://auth.payhero.co.ke/auth/activate_account',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('userToken'),
          },
        }
      )

      if (response.status === 200 || response.status === 201) {
        return response.data
      } else {
        return rejectWithValue('Something went wrong!')
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error_message || 'Network Error'
      )
    }
  }
)

const activationSlice = createSlice({
  name: 'activation',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(activateAccount.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(activateAccount.fulfilled, (state) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(activateAccount.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default activationSlice.reducer
