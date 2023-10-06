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
                <a href='#' onClick={toggleAccountSubMenu}>
                  <i className='fa fa-user-circle'></i>{' '}
                  <span key='t-layouts'>Account</span>{' '}
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
                <a href='#' onClick={toggleInvoicesSubMenu}>
                  <i className='fa fa-receipt'></i>{' '}
                  <span key='t-layouts'>invoices</span>{' '}
                  {showInvoicesSubMenu ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </a>
                {showInvoicesSubMenu && (
                  <ul className='sub-menu' aria-expanded={showInvoicesSubMenu}>
                    <li>
                      <Link to='/send-invoice'>
                        <i className='fas fa-file-invoice-dollar'></i>Send
                        invoice
                      </Link>
                    </li>
                    <li>
                      <Link to='/invoices'>
                        {' '}
                        <i className='fa-solid fa-file-lines'></i>My Invoices{' '}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href='#' onClick={togglePaymentsSubMenu}>
                  <i className='fa fa-money'></i>{' '}
                  <span key='t-layouts'>payments</span>{' '}
                  {showPaymentsSubMenu ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </a>
                {showPaymentsSubMenu && (
                  <ul className='sub-menu' aria-expanded={showPaymentsSubMenu}>
                    <li>
                      <Link to='/transactions'>
                        <i className='fas fa-clipboard-list'></i>{' '}
                        <span key='t-dashboards'> Transactions</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/transactions'>
                        <i className='fas fa-user-tag'></i>{' '}
                        <span key='t-dashboards'> My Customers</span>
                      </Link>
                      <Link to='/transactions'>
                        <i className='fas fa-qrcode'></i>{' '}
                        <span key='t-dashboards'> Generate Lipwa Link</span>
                      </Link>
                      <Link to='/transactions'>
                        <i className='fa-solid fa-mobile'></i>
                        <span key='t-dashboards'>
                          Send customer MPESA STK Push
                        </span>
                      </Link>
                      <Link to='/transactions'>
                        <i className='fa-solid fa-mobile'></i>
                        <span key='t-dashboards'>Account Statement</span>
                      </Link>
                      <Link to='/transactions'>
                        <i className='fa fa-money'></i>
                        <span key='t-dashboards'>
                          payment goal
                          <span
                            className='badge rounded-pill bg-success float-end'
                            key='t-new'
                          >
                            New
                          </span>
                        </span>
                      </Link>
                      <Link to='/transactions'>
                        <i className='fa fa-money'></i>
                        <span key='t-dashboards'>
                          my payment goals
                          <span
                            className='badge rounded-pill bg-success float-end'
                            key='t-new'
                          >
                            New
                          </span>
                        </span>
                      </Link>
                      <Link to='/pricing'>
                        <i className='fa fa-money'></i>
                        <span key='t-dashboards'>pricing</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href='#' onClick={togglepaypalSubMenu}>
                  <i className='fa-solid fa-p'></i>{' '}
                  <span key='t-layouts'>paypal</span>{' '}
                  {showPaypalSubMenu ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </a>
                {showPaypalSubMenu && (
                  <ul className='sub-menu' aria-expanded={showPaypalSubMenu}>
                    <li>
                      <Link to='/paypal'>
                        {' '}
                        <i className='fa fa-user-circle'></i> manage paypal
                        credentials
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href='#' onClick={togglesasaSubMenu}>
                  <i className='fa-solid fa-store'></i>{' '}
                  <span key='t-layouts'>Sasa Pay</span>{' '}
                  {showsasaSubMenu ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </a>
                {showsasaSubMenu && (
                  <ul className='sub-menu' aria-expanded={showsasaSubMenu}>
                    <li>
                      <Link to='/sasa'>
                        {' '}
                        <i className='fa-solid fa-address-book'></i> manage
                        Account
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href='#' onClick={toggleimpotantSubMenu}>
                  <i className='fa-solid fa-arrow-up-right-from-square'></i>{' '}
                  <span key='t-layouts'>Important Links</span>{' '}
                  {showimportantSubMenu ? (
                    <ExpandLessOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </a>
                {showimportantSubMenu && (
                  <ul className='sub-menu' aria-expanded={showimportantSubMenu}>
                    <li>
                      <Link to='/videos'>
                        {' '}
                        <i className='fa-solid fa-video'></i>Videos
                      </Link>
                      <Link
                        to='https://documenter.getpostman.com/view/8153370/TzkyKybq'
                        rel='noreferrer'
                        target='__blank'
                      >
                        <i className='fa-solid fa-laptop-code'></i>API
                        Documententantion
                      </Link>
                      <Link
                        to='https://www.youtube.com/watch?v=zcFWS4TYDa4'
                        rel='noreferrer'
                        target='__blank'
                      >
                        <i className='fa-solid fa-cart-shopping'></i>WooCommerce
                        integration
                      </Link>
                      <Link
                        to='https://scribehow.com/shared/Shopify_Workflow__uxQiGBdgTMCFNO-RrGvdqg'
                        rel='noreferrer'
                        target='__blank'
                      >
                        <i className='fa-solid fa-bag-shopping'></i>Shopify
                        integration
                      </Link>
                    </li>
                  </ul>
                )}
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
