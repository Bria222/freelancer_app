import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import TokenDecoder from '../../app/utils/TokenDecoder'
const backendURL = 'http://127.0.0.1:3002/api/v1'

export const userLogin = createAsyncThunk(
  '/user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${backendURL}/users/login`,
        { email, password },
        config
      )

      // store user's token in local storage
      localStorage.setItem('userToken', data.token)
      const token = localStorage.getItem('userToken')
      const user_info = TokenDecoder(token)

      localStorage.setItem('user_info', user_info.user_id)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(
          error.response?.data?.error_message || 'Network Error'
        )
      } else {
        return rejectWithValue(
          error.response?.data?.error_message || 'Network Error'
        )
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async (
    { name, email, avatar, password, phone_number, role },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        `${backendURL}/users/add`,
        { name, email, avatar, password, phone_number, role },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(
          error.response?.data?.error_message || 'Network Error'
        )
      } else {
        return rejectWithValue(
          error.response?.data?.error_message || 'Network Error'
        )
      }
    }
  }
)
