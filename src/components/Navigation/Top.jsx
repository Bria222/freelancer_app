/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Dropdown } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'

import Swal from 'sweetalert2'

const Top = ({ onButtonClick }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth) // Add useSelector to access userInfo
  const navigate = useNavigate()

  const handleLogout = () => {
    Swal.fire('Logged out!', 'Logout success!', 'success')
    dispatch(logout())
    navigate('/')
  }

  const handleProfile = () => {
    navigate('/profile')
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/api/users/me`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userInfo.token}`, // Use the token from your Redux state
          },
        })

        if (response.ok) {
          const data = await response.json()
          setUsers(data)
        } else {
          // Handle the error case, e.g., set an error state
          console.error('Error fetching data')
        }
      } catch (error) {
        // Handle network errors, e.g., set an error state
        console.error('Network error', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userInfo])
  return (
    <>
      <header
        id='page-topbar'
        className='bg-info'
        style={{ backgroundColor: 'blue', color: 'black' }}
      >
        <div className='navbar-header'>
          <div className='d-flex'>
            <div className='navbar-brand-box'>
              <a href='index.html' className='logo logo-dark'>
                <span className='logo-sm'>
                  <img src='../default.jpg' alt='logo' />
                </span>
                <span className='logo-lg'>
                  <img
                    src='../default.jpg'
                    alt=''
                    style={{ height: '100px' }}
                  />
                </span>
              </a>
              <a href='index.html' className='logo logo-light text-white'>
                <span className='logo-sm'>
                  <img src='../default.jpg' alt='' />
                </span>
                <span className='logo-lg'>
                  <img src='' alt='' style={{ height: '100px' }} />
                </span>
              </a>
              <Link to='/' className='navbar-brand'>
                <i className='fa-solid fa-computer text-info'></i>{' '}
                <span style={{ fontWeight: '900', color: 'green' }}>F</span>
                reelancers Arena
              </Link>
            </div>

            <button
              type='button'
              className='btn btn-sm px-3 font-size-16 header-item waves-effect mt-4'
              id='vertical-menu-btn'
              onClick={onButtonClick}
            >
              <i className='fa fa-fw fa-bars text-white fw-bolder'></i>
            </button>
          </div>

          <div className='d-flex'>
            <div className='dropdown d-inline-block  ms-2'>
              <div className='btn header-item noti-icon waves-effect'>
                <div
                  className='nav-link custom'
                  style={{ padding: ' 1.5rem 1rem' }}
                >
                  <span
                    className='text-white fw-bolder me-1'
                    style={{ fontSize: '15px' }}
                  >
                    Balance:
                  </span>
                  <Link
                    to='#'
                    id='dropdown-flag'
                    data-toggle='modal'
                    data-target='#topup-modal'
                  >
                    <span
                      className='badge bg-dark badge-danger '
                      style={{ fontSize: '14px' }}
                    >
                      {' '}
                      KES
                      <b className='balance_1'>216.60</b>
                    </span>

                    <i
                      className='fa fa-spin fa-refresh spinner balance-spin '
                      style={{ display: 'none' }}
                      aria-hidden='true'
                    ></i>
                  </Link>
                  <Link to='/payments/refresh-balance' title='Refresh balance'>
                    <i className='fa fa-refresh' aria-hidden='false'></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className='dropdown d-inline-block'>
              <div className='dropdown-menu dropdown-menu-end'>
                <a
                  href=''
                  className='dropdown-item notify-item language'
                  data-lang='sp'
                >
                  <img
                    src='../images/flags/spain.jpg'
                    alt='user-image'
                    className='me-1'
                  />
                  <span className='align-middle'>Spanish</span>
                </a>
              </div>
            </div>

            <div className='dropdown d-inline-block'>
              <button
                type='button'
                className='btn header-item noti-icon waves-effect'
                id='page-header-notifications-dropdown'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <i className='fa-solid fa-bell text-white'></i>
                <span className='badge bg-danger rounded-pill'>3</span>
              </button>
              <div
                className='dropdown-menu dropdown-menu-lg dropdown-menu-end p-0'
                aria-labelledby='page-header-notifications-dropdown'
              >
                <div className='p-3'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h6 className='m-0' key='t-notifications'>
                        Notifications
                      </h6>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: '230px' }}>
                  <a href='' className='text-reset notification-item'>
                    <div className='d-flex'>
                      <div className='avatar-xs me-3'>
                        <span className='avatar-title bg-primary rounded-circle font-size-16'>
                          <i className='fa fa-cart'></i>
                        </span>
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='mb-1' key='t-your-order'>
                          Your order is placed
                        </h6>
                        <div className='font-size-12 text-muted'>
                          <p className='mb-1' key='t-grammer'>
                            If several languages coalesce the grammar
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='p-2 border-top d-grid'>
                  <a
                    className='btn btn-sm btn-link font-size-14 text-center'
                    href=''
                  >
                    <i className='mdi mdi-arrow-right-circle me-1'></i>
                    <span key='t-view-more'>View More..</span>
                  </a>
                </div>
              </div>
            </div>

            <Dropdown as='div' className='d-inline-block'>
              <Dropdown.Toggle
                as='button'
                className='btn header-item waves-effect'
                id='page-header-user-dropdown'
              >
                {loading ? (
                  <div
                    className='spinner-grow text-white mt-lg-2'
                    role='status'
                  >
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                ) : (
                  <>
                    <img
                      className='rounded-circle header-profile-user'
                      src='../default.jpg'
                      alt={users.firstname}
                    />
                  </>
                )}
                <span
                  className='d-none d-xl-inline-block ms-1 text-white'
                  key='t-henry'
                >
                  {loading ? (
                    <div
                      className='spinner-border text-white mt-lg-2'
                      role='status'
                    >
                      <span className='visually-hidden'>Loading...</span>
                    </div>
                  ) : (
                    <>{users.firstname}</>
                  )}
                </span>{' '}
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropdown-menu-end'>
                <Dropdown.Item onClick={handleProfile}>
                  <i className='fa-regular fa-user font-size-16 align-middle me-1'></i>
                  <span key='t-profile'>Profile</span>
                </Dropdown.Item>

                <Dropdown.Item className='d-block' href='#'>
                  <span className='badge bg-danger float-end'>11</span>

                  <i className='fa-solid fa-gear font-size-16 align-middle me-1'></i>
                  <span key='t-settings'>Settings</span>
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item className='text-danger' onClick={handleLogout}>
                  <i className='fa-solid fa-right-from-bracket font-size-16 align-middle me-1 text-danger'></i>
                  <span key='t-logout'>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <div className='dropdown d-inline-block'>
              <button
                type='button'
                className='btn header-item noti-icon right-bar-toggle waves-effect'
              >
                <i className='fa-solid fa-gear bx-spin text-white'></i>
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  )
}
Top.propTypes = {
  onButtonClick: PropTypes.bool.isRequired,
}

export default Top
