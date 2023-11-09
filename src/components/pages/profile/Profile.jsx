/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../../Footer/Footer'
import { fetchUser } from '../../../features/auth/userSlice'

const Profile = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { user, status, error } = useSelector((state) => state.user)

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('userToken')

    if (token) {
      dispatch(fetchUser(token))
    }
  }, [dispatch])

  if (status === 'loading') {
    return <>Loading...</>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                  <div className='page-title-right'>
                    <ol className='breadcrumb m-0 d-flex gap-1'>
                      <li className='breadcrumb-item'>Dashboard</li>/
                      <li className='list-group-item '>Profile</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className='row'>
                {status === 'loading' ? (
                  <div
                    className='progress'
                    role='progressbar'
                    aria-label='Animated striped example'
                    aria-valuenow='75'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  >
                    <div
                      className='progress-bar progress-bar-striped progress-bar-animated bg-success'
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                ) : (
                  <>
                    <div className='card mb-3' style={{ width: '100%' }}>
                      <div className='row g-0'>
                        <div className='col-md-2'>
                          <img
                            className=''
                            src='../default.jpg'
                            alt={user.name}
                            style={{ height: '60%', width: '60%' }}
                          />
                        </div>
                        <div className='col-md-10'>
                          <div className='card-body'>
                            <h5 className='card-title'>{user.firstname}</h5>

                            <table className='table table-stripped table-responsive'>
                              <thead>
                                <tr>
                                  <th scope='col'>FirstName</th>
                                  <th scope='col'>Email</th>
                                  <th scope='col'>Phone number</th>
                                  <th scope='col'>Wallet Balance</th>
                                  <th scope='col'>Rights</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope='row'>{user.firstname}</th>
                                  <td>{user.email}</td>
                                  <td>{user.phone}</td>
                                  <td>{6547.0}</td>
                                  <td>{user.role}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className='container'>
                <h1 className='text-center'>
                  {' '}
                  <i className='fa-solid fa-pen-to-square'></i> Edit profile
                </h1>
                <div className='container'>
                  <div className='row g-3'>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={user.firstname}
                        aria-label='First name'
                      />
                    </div>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={user.lastname}
                        aria-label='Last name'
                      />
                    </div>
                  </div>
                  <div className='row g-3 mt-1'>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={user.email}
                        aria-label='Email'
                      />
                    </div>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={user.phone}
                        aria-label='phone_name'
                      />
                    </div>
                  </div>
                  <div className='row g-3 mt-1'>
                    <div className='col'>
                      <input
                        type='file'
                        className='form-control'
                        aria-label='avatar'
                      />
                    </div>
                    <div className='col'>
                      <button className='btn btn-success'>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container'>
                <h5 className='fw-bolder mt-lg-4'>
                  {' '}
                  <i className='fa-solid fa-pen-to-square'></i> Change Password
                </h5>
                <div className='container'>
                  <div className='row g-3'>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={'previous password'}
                        aria-label='First name'
                      />
                    </div>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder={'new password'}
                        aria-label='Last name'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Profile
