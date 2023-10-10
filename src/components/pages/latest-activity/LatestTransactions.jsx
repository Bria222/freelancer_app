/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, MenuItem, Select, Typography } from '@mui/material'
import { DateTime } from 'luxon'
import ThreeDots from '../../loading_state/ThreeDots'
import { fetchUser } from '../../../features/slices/user/userSlice'
import axios from 'axios'
const LatestTransactions = () => {
  const [selectedAccount, setSelectedAccount] = useState('')
  const [data, setData] = useState(null)
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false)

  const user_accounts = useSelector((state) => state.accountInfo)
  const account_id =
    user_accounts && user_accounts.data ? user_accounts.data.id : null
  const dispatch = useDispatch()
  const {
    data: userdata,
    isLoading: isLoadingUser,
    error,
  } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const fetchData = async () => {
    const API_URL = `https://backend.payhero.co.ke/api/accounts/${account_id}/transactions`
    const token = localStorage.getItem('userToken')

    try {
      setIsLoadingTransactions(true)
      const response = await axios.get(API_URL, {
        headers: {
          'x-auth-token': token,
        },
      })
      setData(response.data)
      setIsLoadingTransactions(false)
    } catch (error) {
      console.log('Error:', error)
      setIsLoadingTransactions(false)
    }
  }

  useEffect(() => {
    if (account_id) {
      fetchData()
    }
  }, [account_id])

  useEffect(() => {
    if (userdata && userdata.accounts && userdata.accounts.length > 0) {
      setSelectedAccount(userdata.accounts[0].id)
    }
  }, [userdata])

  if (isLoadingUser) {
    return <ThreeDots />
  }
  if (error) {
    return <div>`There was an error: ${error}`</div>
  }

  if (isLoadingTransactions) {
    return <ThreeDots />
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title'>My Transactions List</h4>
                <div className='table-responsive'>
                  <table
                    id='datatable-buttons'
                    className='table table-bordered dt-responsive nowrap w-100'
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>type</th>
                        <th>wallet_balance</th>
                        <th>amount</th>

                        <th>reference</th>
                        <th>description</th>
                        <th>Transaction Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.transactions && data.transactions.length > 0 ? (
                        data.transactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <th scope='row'>{transaction.id}</th>
                            <td>
                              <span
                                className='badge rounded-pill bg-success'
                                key='t-new'
                              >
                                {transaction.transaction_type}
                              </span>
                            </td>
                            <td> {transaction.wallet_balance}</td>
                            <td>{transaction.amount}</td>

                            <td>{transaction.provider_reference}</td>
                            <td>{transaction.description}</td>

                            <td>
                              {DateTime.fromISO(
                                transaction.created_at
                              ).toFormat('dd-MM-yyyy')}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan='9'>No Transaction found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestTransactions
