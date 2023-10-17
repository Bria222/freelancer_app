/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
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
  const { userInfo } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const handleLogout = () => {
    Swal.fire('logged out!', 'logout sucess!', 'success')
    dispatch(logout())
    navigate('/')
  }
  const handleProfile = () => {
    navigate('/profile')
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:3002/api/v1/user/5')
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
  }, [])

  return (
    <>
      <header
        id='page-topbar'
        className=''
        style={{ backgroundColor: '#2a3042', color: 'white' }}
      >
        <div className='navbar-header'>
          <div className='d-flex'>
            <div className='navbar-brand-box'>
              <a href='index.html' className='logo logo-dark'>
                <span className='logo-sm'>
                  <img src='../main-logo.jpeg' alt='logo' />
                </span>
                <span className='logo-lg'>
                  <img
                    src='../main-logo.jpeg'
                    alt=''
                    style={{ height: '100px' }}
                  />
                </span>
              </a>
              <a href='index.html' className='logo logo-light text-white'>
                <span className='logo-sm'>
                  <img src='../images/logo-light.svg' alt='' />
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

            <form className='app-search d-none d-lg-block mt-4'>
              <div className='position-relative'>
                <input
                  type='text'
                  className='form-control bg-dark'
                  placeholder='Search...'
                />
                <span className=''>
                  {' '}
                  <SearchOutlinedIcon />
                </span>
              </div>
            </form>
          </div>

          <div className='d-flex'>
            <div className='dropdown d-inline-block d-lg-none ms-2'>
              <button
                type='button'
                className='btn header-item noti-icon waves-effect'
                id='page-header-search-dropdown'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <SearchOutlinedIcon className='text-white ' />
              </button>

              <div
                className='dropdown-menu dropdown-menu-lg dropdown-menu-end p-0'
                aria-labelledby='page-header-search-dropdown'
              >
                <form className='p-3'>
                  <div className='form-group m-0'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search ...'
                        aria-label="Recipient's username"
                      />
                      <div className='input-group-append'>
                        <button className='btn btn-primary' type='submit'>
                          <SearchOutlinedIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='dropdown d-inline-block'>
              <div className='dropdown-menu dropdown-menu-end'>
                <a
                  href=''
                  className='dropdown-item notify-item language'
                  data-lang='en'
                >
                  <img
                    src='../images/flags/us.jpg'
                    alt='user-image'
                    className='me-1'
                  />
                  <span className='align-middle'>English</span>
                </a>

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

                <a
                  href=''
                  className='dropdown-item notify-item language'
                  data-lang='gr'
                >
                  <img
                    src='../images/flags/germany.jpg'
                    alt='user-image'
                    className='me-1'
                  />
                  <span className='align-middle'>German</span>
                </a>

                <a
                  href=''
                  className='dropdown-item notify-item language'
                  data-lang='it'
                >
                  <img
                    src='../images/flags/italy.jpg'
                    alt='user-image'
                    className='me-1'
                  />
                  <span className='align-middle'>Italian</span>
                </a>

                <a
                  href=''
                  className='dropdown-item notify-item language'
                  data-lang='ru'
                >
                  <img
                    src='../images/flags/russia.jpg'
                    alt='user-image'
                    className='me-1'
                  />
                  <span className='align-middle'>Russian</span>
                </a>
              </div>
            </div>

            <Dropdown as='div' className='d-none d-lg-inline-block ms-1'>
              <Dropdown.Toggle
                as='button'
                className='btn header-item noti-icon waves-effect'
                id='dropdown-customize-icon'
              >
                <DashboardCustomizeIcon className='text-white' />
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropdown-menu-lg dropdown-menu-end'>
                <div className='px-lg-2'>
                  <div className='row g-0'>
                    <div className='col'>
                      <Dropdown.Item href='#'>
                        <img
                          src='../images/brands/instagram.png'
                          alt='instagram'
                        />
                        <span>Instagram</span>
                      </Dropdown.Item>
                    </div>
                    <div className='col'>
                      <Dropdown.Item href='#'>
                        <img
                          src='../images/brands/linkedin.png'
                          alt='linkedin'
                        />
                        <span>Linkedin</span>
                      </Dropdown.Item>
                    </div>
                    <div className='col'>
                      <Dropdown.Item href='#'>
                        <img
                          src='../images/brands/whatsapp.png'
                          alt='whatsapp'
                        />
                        <span>whathsapp</span>
                      </Dropdown.Item>
                    </div>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <div className='dropdown d-none d-lg-inline-block ms-1'>
              <button
                type='button'
                className='btn header-item noti-icon waves-effect'
                data-bs-toggle='fullscreen'
              >
                <FullscreenIcon className='text-white' />
              </button>
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
                    <div className='col-auto'>
                      <a href='#!' className='small' key='t-view-all'>
                        {' '}
                        View All
                      </a>
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
                          <p className='mb-0'>
                            <i className='mdi mdi-clock-outline'></i>
                            <span key='t-min-ago'>3 min ago</span>
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
                <img
                  className='rounded-circle header-profile-user'
                  src={users.avatar}
                  alt='user Avatar'
                />
                <span
                  className='d-none d-xl-inline-block ms-1 text-white'
                  key='t-henry'
                >
                  {loading ? <p>Loading...</p> : <>{users.name}</>}
                </span>{' '}
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropdown-menu-end'>
                <Dropdown.Item onClick={handleProfile}>
                  <i className='fa-regular fa-user font-size-16 align-middle me-1'></i>
                  <span key='t-profile'>Profile</span>
                </Dropdown.Item>

                <Dropdown.Item className='d-block' href='#'>
                  <span className='badge bg-success float-end'>11</span>

                  <i className='fa-solid fa-gear font-size-16 align-middle me-1'></i>
                  <span key='t-settings'>Settings</span>
                </Dropdown.Item>
                <div className='dropdown'>
                  <button
                    className='btn btn-light dropdown-toggle'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='fa-solid fa-toggle-off font-size-16 align-middle me-1'></i>{' '}
                    switch account
                  </button>
                  <ul className='dropdown-menu'>
                    {/* {data &&
                      data.accounts &&
                      data.accounts.map((account, i) => (
                        <li
                          key={account.id}
                          onClick={() => handleToggleElert(account, i)}
                        >
                          <button
                            className={`btn btn-group-lg ${
                              i === activeAccountIndex ? 'active-account' : ''
                            }`}
                          >
                            {i === activeAccountIndex ? (
                              <>
                                <i className='fa-solid fa-toggle-on fa-lg text-success me-1'></i>
                              </>
                            ) : (
                              <i className='fa-solid fa-toggle-off fa-lg text-danger me-1'></i>
                            )}
                            {account.name}
                            {i === activeAccountIndex ? (
                              <>
                                <div
                                  className='spinner-grow spinner-grow-sm text-success'
                                  role='status'
                                >
                                  <span className='visually-hidden'>
                                    Loading...
                                  </span>
                                </div>
                              </>
                            ) : (
                              ''
                            )}
                          </button>
                        </li>
                      ))} */}
                  </ul>
                </div>
                <Dropdown.Divider />
                <Dropdown.Item className='text-danger' onClick={handleLogout}>
                  <i className='fa-solid fa-right-from-bracket font-size-16 align-middle me-1 text-danger'></i>
                  <span key='t-logout'>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className='dropdown d-inline-block'>
              <button
                type='button'
                className='btn header-item noti-icon right-bar-toggle waves-effect'
              >
                <i className='fa-solid fa-gear bx-spin text-white'></i>
              </button>
            </div>
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
