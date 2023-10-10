/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Swal from 'sweetalert2'

import axios from 'axios'

const Organization = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const user_accounts = useSelector((state) => state.accountInfo)
  const [isLoading, setIsLoading] = useState(false)

  const accountId = user_accounts.data ? user_accounts.data.id : null
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const handleFormSubmit = (data) => {
    setIsLoading(true)

    let phoneNumber = data.number.trim()

    if (phoneNumber.startsWith('0') && !phoneNumber.startsWith('254')) {
      phoneNumber = `254${phoneNumber.substring(1)}`
    }

    data.number = phoneNumber

    data.account_id = accountId

    const token = localStorage.getItem('userToken')

    const headers = {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
    }

    axios
      .post(`https://auth.payhero.co.ke/auth/account_invites`, data, {
        headers,
      })
      .then((response) => {
        setIsLoading(false)

        if (response.status === 200 || response.status === 201) {
          Swal.fire('Success!', 'invitation sent successfully!', 'success')
          navigate('/home')
        } else {
          Swal.fire('Oops...', 'Something went wrong!', 'error')
        }
      })
      .catch((error) => {
        setIsLoading(false)
        console.error(error)
        Swal.fire({
          title: 'ERROR',
          text: `you dont have permisions to perform this action`,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        })
      })
  }
  return (
    <>
      <div className='account-pages my-5 pt-sm-5'>
        <div className='container '>
          <div className='row justify-content-center'>
            <div className='col col-lg col-xl-5'>
              <div className='card overflow-hidden'>
                <div className='bg-warning bg-soft'>
                  <div className='row'>
                    <div className='col-7'>
                      <div className='text-success p-4'>
                        <h5 className='text-dark'>Organization Invitation!</h5>
                        <p className='text-dark'>
                          Fill this form to extend account invitation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-body pt-0'>
                  <div className='p-2'>
                    <form
                      className='form-horizontal '
                      onSubmit={handleSubmit(handleFormSubmit)}
                    >
                      <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'>
                          Customer Phone Number
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          placeholder='+254...'
                          {...register('number')}
                          required
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>
                          Customer Email
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Enter email address'
                          {...register('email')}
                          required
                        />
                      </div>

                      <div className='mt-3 d-grid'>
                        <button
                          className='btn btn-success waves-effect waves-light'
                          type='submit'
                        >
                          {loading ? (
                            <div
                              className='spinner-border text-white'
                              role='status'
                            >
                              <span className='visually-hidden'>
                                Loading...
                              </span>
                            </div>
                          ) : (
                            'Send Invite'
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='mt-5 text-center'>
                <div>
                  <p>
                    © <script>document.write(new Date().getFullYear())</script>{' '}
                    2023 SPS. Crafted with
                    <i className='fa-solid fa-heart text-danger'></i> by Pay
                    Hero Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Organization
