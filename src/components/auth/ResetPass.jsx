/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'
import Swal from 'sweetalert2'
import ThreeDots from '../loading_state/ThreeDots'
import axios from 'axios'

const ResetPass = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/home')
      window.location.reload()
    }
  }, [navigate, userInfo])

  if (error) {
    Swal.fire(`<Error>${error}</Error>`)
  }
  if (userInfo) {
    Swal.fire({
      title: 'welcome!',
      text: `reset sucess!`,
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    })
  }
  const handleFormSubmit = (data) => {
    setIsLoading(true)

    // data.channel_id = 1

    const token = localStorage.getItem('userToken')

    const headers = {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
    }

    axios
      .post(`https://auth.payhero.co.ke/auth/forgot_password`, data, {
        headers,
      })
      .then((response) => {
        setIsLoading(false)
        // handle response
        if (response.status === 200 || response.status === 201) {
          Swal.fire('Success!', 'reset password successfully sent!', 'success')
          navigate('/')
        } else {
          Swal.fire('Oops...', 'Something went wrong!', 'error')
        }
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('this is an error', error)
      })
  }
  return (
    <>
      <div className='account-pages my-5 pt-sm-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8 col-lg-6 col-xl-5'>
              <div className='card overflow-hidden'>
                <div className='bg-success bg-soft'>
                  <div className='row'>
                    <div className='col-7'>
                      <div className='text-success p-4'>
                        <h5 className='text-dark'>Welcome Back !</h5>
                        <p className='text-dark'>
                          enter email to reset your password!
                        </p>
                      </div>
                    </div>
                    <div className='col-5 align-self-end'>
                      <img
                        src='../images/profile-img.png'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
                <div className='card-body pt-0'>
                  <div className='auth-logo'>
                    <a href='index.html' className='auth-logo-light'>
                      <div className='avatar-md profile-user-wid mb-4'>
                        <span className='avatar-title rounded-circle bg-light'>
                          <img
                            src='../images/logo-light.svg'
                            alt='payhero'
                            className='rounded-circle'
                            height='34'
                          />
                        </span>
                      </div>
                    </a>

                    <a href='/' className='auth-logo-dark'>
                      <div className='avatar-md profile-user-wid mb-4'>
                        <span className='avatar-title rounded-circle bg-light'>
                          <img
                            src='../files-PayHero3.png'
                            alt=''
                            className='rounded-circle'
                            height='34'
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className='p-2'>
                    <form
                      className='form-horizontal'
                      onSubmit={handleSubmit(handleFormSubmit)}
                    >
                      <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>
                          Email
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='username'
                          placeholder='Enter email'
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
                            'Reset Password'
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

export default ResetPass
