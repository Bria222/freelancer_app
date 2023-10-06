import { createSlice } from '@reduxjs/toolkit'

const AccountsSlice = createSlice({
  name: 'accountInfo',
  initialState: {
    data: null,
  },
  reducers: {
    HandleAccount: (state, action) => {
      const { account_info, index } = action.payload
      state.data = account_info[index]
    },
  },
})

export default AccountsSlice.reducer
export const { HandleAccount } = AccountsSlice.actions
