/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../features/auth/userSlice'
import { fetchOrders } from '../../features/slices/orders/orderSlice'
const Sidebar = ({ menuVisible }) => {
  const [showAccountSubMenu, setShowAccountSubMenu] = useState(false)
  const [showOrdersSubMenu, setShowOrdersSubMenu] = useState(false)
  const [showWritersSubMenu, setShowWritersSubMenu] = useState(false)
  const dispatch = useDispatch()
  const { user, status, error } = useSelector((state) => state.user)
  const {
    orders,
    status: orderStatus,
    error: orderErr,
  } = useSelector((state) => state.orders)
  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('userToken')

    if (token) {
      dispatch(fetchUser(token))
      dispatch(fetchOrders(token))
    }
  }, [dispatch])

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  const toggleAccountSubMenu = () => {
    setShowAccountSubMenu((prevShowAccountSubMenu) => !prevShowAccountSubMenu)
  }

  const toggleOrdersSubMenu = () => {
    setShowOrdersSubMenu((prevShowOrdersSubMenu) => !prevShowOrdersSubMenu)
  }
  const toggleWritersSubMenu = () => {
    setShowWritersSubMenu((prevShowWritersSubMenu) => !prevShowWritersSubMenu)
  }
  // order analytics
  const draftOrders = orders.filter((order) => order.request_mode === 'draft')
  const bidOrders = orders.filter((order) => order.request_mode === 'bid')
  const takeOrders = orders.filter((order) => order.request_mode === 'take')
  const publicOrders = orders.filter((order) => order.request_mode === 'public')

  return (
    <>
      <div className={`vertical-menu ${menuVisible ? 'show-menu' : ''}`}>
        <div data-simplebar className='h-100'>
          <div id='sidebar-menu'>
            <ul className='metismenu list-unstyled' id='side-menu'>
              <li className='menu-title' key='t-menu'>
                Menu
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-house'></i>{' '}
                  <span key='t-dashboards'> Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to='#' onClick={toggleOrdersSubMenu}>
                  <i className='fa fa-user-circle'></i>{' '}
                  <span key='t-layouts'>Orders</span>{' '}
                  {showOrdersSubMenu ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </Link>
                {showOrdersSubMenu && (
                  <ul className='sub-menu' aria-expanded={showOrdersSubMenu}>
                    {user && user.role === 'employer' ? (
                      <li>
                        <Link to='/profile'>
                          <i className='fas fa-user-cog'></i> Post an Order
                        </Link>
                      </li>
                    ) : null}

                    <li>
                      <Link to='/orders'>
                        <p className='position-relative'>
                          All Orders
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {orders.length}
                            <span className='visually-hidden'>
                              unread messages
                            </span>
                          </span>
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/orders'>
                        <p className='position-relative'>
                          Draft Orders
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {draftOrders.length}
                            <span className='visually-hidden'>
                              draft orders
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link to='/orders'>
                        <p className='position-relative'>
                          Request/Bid
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {bidOrders.length}
                            <span className='visually-hidden'>Request/Bid</span>
                          </span>
                        </p>
                      </Link>
                      <Link to='/orders'>
                        <p className='position-relative'>
                          Take orders
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {takeOrders.length}
                            <span className='visually-hidden'>Request/Bid</span>
                          </span>
                        </p>
                      </Link>
                      <Link to='/orders'>
                        <p className='position-relative'>
                          Public orders
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {publicOrders.length}
                            <span className='visually-hidden'>
                              public orders
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link to='/orders'>
                        <p className='position-relative'>
                          Escrowed orders
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {0}
                            <span className='visually-hidden'>
                              Escrowed orders
                            </span>
                          </span>
                        </p>
                      </Link>
                      <Link to='/orders'>
                        <p className='position-relative'>
                          In Progress
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {0}
                            <span className='visually-hidden'>
                              In Progress orders
                            </span>
                          </span>
                        </p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {(user && user.role === 'employer') || user.role === 'admin' ? (
                <li>
                  <a href='#' onClick={toggleWritersSubMenu}>
                    <i className='fa fa-user-circle'></i>{' '}
                    <span key='t-layouts'>Writers</span>{' '}
                    {showWritersSubMenu ? (
                      <ExpandLessOutlinedIcon />
                    ) : (
                      <KeyboardArrowDownOutlinedIcon />
                    )}
                  </a>
                  {showWritersSubMenu && (
                    <ul className='sub-menu' aria-expanded={showWritersSubMenu}>
                      <li>
                        <Link to='/profile'>
                          <i className='fas fa-user-cog'></i> My Writers
                        </Link>
                      </li>
                      <li>
                        <Link to='/profile'>
                          <i className='fas fa-user-cog'></i> Public Writers
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link to='/profile'>
                    <i className='fas fa-user-cog'></i> My Employers
                  </Link>
                </li>
              )}{' '}
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-pen'></i>{' '}
                  <span key='t-dashboards'>Available</span>
                </Link>
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-pen-nib'></i>{' '}
                  <span key='t-dashboards'>In Progress</span>
                </Link>
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-flag'></i>{' '}
                  <span key='t-dashboards'>In Review</span>
                </Link>
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-square-check'></i>{' '}
                  <span key='t-dashboards'>Completed</span>
                </Link>
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-pen-to-square'></i>{' '}
                  <span key='t-dashboards'>Revision</span>
                </Link>
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-thumbs-down'></i>{' '}
                  <span key='t-dashboards'>Disputed</span>
                </Link>
              </li>
              <li>
                <a href='#' onClick={toggleAccountSubMenu}>
                  <i className='fa fa-user-circle'></i>{' '}
                  <span key='t-layouts'>Profile</span>{' '}
                  {showAccountSubMenu ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </a>
                {showAccountSubMenu && (
                  <ul className='sub-menu' aria-expanded={showAccountSubMenu}>
                    <li>
                      <Link to='/profile'>
                        <i className='fas fa-user-cog'></i> Accont Details
                      </Link>
                    </li>
                    <li>
                      <Link to='/profile'>
                        <i className='fas fa-user-edit'></i>Update Account
                      </Link>
                    </li>
                    <li>
                      <Link to='/payment-channells'>
                        {' '}
                        <i className='fas fa-piggy-bank'></i>my payment
                        channells
                      </Link>
                    </li>
                    <li>
                      <Link to='/add-payment-chanell'>
                        <i className='fas fa-plus-circle'></i>Add payment
                        channell
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-comments'></i>{' '}
                  <span key='t-dashboards'>General Chat</span>
                </Link>
              </li>
              <li>
                <Link to='/home'>
                  <i className='fa-solid fa-money-bill'></i>{' '}
                  <span key='t-dashboards'>Transactions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
Sidebar.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
}

export default Sidebar
