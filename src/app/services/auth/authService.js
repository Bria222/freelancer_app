import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https//auth.payhero.co.ke',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken
      console.log(getState(), 'getstate...')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: (id) => ({
        url: `/auth/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

// export react hook
export const { useGetDetailsQuery } = authApi
