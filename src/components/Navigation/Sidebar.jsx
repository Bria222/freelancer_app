/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const Sidebar = ({ menuVisible }) => {
  const [showAccountSubMenu, setShowAccountSubMenu] = useState(false)
  const [showInvoicesSubMenu, setShowInvoicesSubMenu] = useState(false)
  const [showPaymentsSubMenu, setShowPaymentsSubMenu] = useState(false)
  const [showPaypalSubMenu, setShowPaypalSubMenu] = useState(false)
  const [showsasaSubMenu, setShowsasaSubMenu] = useState(false)
  const [showimportantSubMenu, setShowimportantSubMenu] = useState(false)

  const toggleAccountSubMenu = () => {
    setShowAccountSubMenu((prevShowAccountSubMenu) => !prevShowAccountSubMenu)
  }

  const toggleInvoicesSubMenu = () => {
    setShowInvoicesSubMenu(
      (prevShowInvoicesSubMenu) => !prevShowInvoicesSubMenu
    )
  }
  const togglePaymentsSubMenu = () => {
    setShowPaymentsSubMenu(
      (prevshowPaymentsSubMenu) => !prevshowPaymentsSubMenu
    )
  }

  const togglepaypalSubMenu = () => {
    setShowPaypalSubMenu((prevShowPaypalSubMenu) => !prevShowPaypalSubMenu)
  }
  const togglesasaSubMenu = () => {
    setShowsasaSubMenu((prevShowsasaSubMenu) => !prevShowsasaSubMenu)
  }
  const toggleimpotantSubMenu = () => {
    setShowimportantSubMenu(
      (prevShowimportantSubMenu) => !prevShowimportantSubMenu
    )
  }

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
