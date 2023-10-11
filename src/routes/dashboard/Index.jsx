/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import MonthlyPaymentsChart from '../../components/analytics/MonthlyPaymentsChart'
import TransactionChargesSummary from '../../components/analytics/TransactionChargesSummary'
import Order from '../../components/Orders/Order'

const Index = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [showBox, setShowBox] = useState(true)

  const toggleBox = () => {
    setShowBox(!showBox)
  }

  return (
    <>
      <div id='layout-wrapper'>
        <div className='main-content'>
          <div className='page-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                    <h4 className='mb-sm-0 font-size-18'>Main Dashboard</h4>

                    <div className='page-title-right'>
                      <ol className='breadcrumb m-0 d-flex gap-1'>
                        <li className='breadcrumb-item'>Home</li>/
                        <li className='list-group-item '>Dashboard</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div
                  className='alert alert-primary alert-dismissible fade show'
                  role='alert'
                >
                  <h4 style={{ color: 'black' }}>
                    <i className='fa fa-gift me-2'></i>NEW SERVICE!
                  </h4>
                  <p>
                    Introducing new payment methods MPESA, Airtel Money, T-Kash
                    and Pesa Link easily.{' '}
                    <Link to='/sasa' className='btn btn-success btn-sm'>
                      {' '}
                      <i className='fa fa-link align-middle'></i> Get Started{' '}
                    </Link>
                  </p>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='alert'
                    aria-label='Close'
                  ></button>
                </div>

                <div className='col-lg-12 '>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='d-flex'>
                            <div className='flex-shrink-0 me-3'>
                              <img
                                src={1}
                                alt=''
                                className='avatar-md rounded-circle img-thumbnail'
                              />
                            </div>
                            <div className='flex-grow-1 align-self-center'>
                              <div className='text-muted'>
                                <p className='mb-2'>Welcome to SPS</p>
                                <h5 className='mb-1'>
                                  {userInfo ? userInfo.user.name : null}{' '}
                                </h5>
                                <p className='mb-1'>
                                  <span className='badge badge-sm '>
                                    {/* {data && data.status === 'verified' ? (
                                      <p className='btn btn-success waves-effect waves-light btn-sm'>
                                        Verified
                                        <i className='fa-solid fa-check ms-1'></i>
                                      </p>
                                    ) : data && data.status !== 'verified' ? (
                                      <button
                                        type='button'
                                        className='btn btn-danger '
                                        data-bs-toggle='modal'
                                        data-bs-target='#activate'
                                      >
                                        Verify
                                        <i className='fa-solid fa-xmark'></i>
                                      </button>
                                    ) : (
                                      <p>NOT DEFINED</p>
                                    )} */}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                          <div className='text-lg-center mt-4 mt-lg-0'>
                            <div className='row'>
                              <div className='col-6'>
                                <div>
                                  <p className='text-muted text-truncate mb-2'>
                                    <strong>Service Wallet Balance</strong>{' '}
                                  </p>
                                  <h5 className='mb-0'>
                                    {/* {user_accounts && user_accounts.data ? (
                                      <>
                                        {user_accounts.data?.service_wallet_balance?.toFixed(
                                          1
                                        ) || 'Zero balance'}
                                      </>
                                    ) : (
                                      <span>No accounts</span>
                                    )}{' '} */}
                                  </h5>
                                </div>
                              </div>
                              <div className='col-6'>
                                <div>
                                  <p className='text-muted text-truncate mb-2'>
                                    <strong>Account Name</strong>{' '}
                                  </p>
                                  <h5 className='mb-0'>
                                    {/* {user_accounts && user_accounts.data ? (
                                      <div className='list-group'>
                                        <span
                                          key={user_accounts.data.id}
                                          className='list-group'
                                        >
                                          {' '}
                                          {user_accounts.data.name}
                                        </span>
                                      </div>
                                    ) : (
                                      <span>No accounts</span>
                                    )}{' '} */}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='col-sm-3'>
                  <div className='card mini-stats-wid'>
                    <div className='card-body'>
                      <div className='d-flex'>
                        <div className='flex-shrink-0 me-3 align-self-center'>
                          <i className='fa fa-list-ul h2 text-success mb-0'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Transactions</p>
                          <h5 className='mb-0'>{49} </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='card mini-stats-wid'>
                    <div className='card-body'>
                      <div className='d-flex'>
                        <div className='flex-shrink-0 me-3 align-self-center'>
                          <i className='fa fa-receipt h2 text-dark mb-0'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Invoices</p>
                          <h5 className='mb-0'>18 </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='card mini-stats-wid'>
                    <div className='card-body'>
                      <div className='d-flex'>
                        <div className='flex-shrink-0 me-3 align-self-center'>
                          <i className='fa fa-credit-card h2 text-info mb-0'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>My Payment Channels</p>
                          <h5 className='mb-0'>2 </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-3'>
                  <div className='card mini-stats-wid'>
                    <div className='card-body'>
                      <div className='d-flex'>
                        <div className='flex-shrink-0 me-3 align-self-center'>
                          <i className='fa fa-group h2 text-warning mb-0'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>My Customers</p>
                          <h5 className='mb-0'>3 </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='row'>
                    <Order />
                  </div>
                </div>
                {/* <MonthlyPaymentsChart />
                <TransactionChargesSummary /> */}
              </div>
            </div>
          </div>
          {/* <TopUp /> */}
          {/* <ActivateAccount /> */}
          <footer className='footer'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-sm-6'>
                  <script>document.write(new Date().getFullYear())</script>2023
                  © SPS.
                </div>
                <div className='col-sm-6'>
                  <div className='text-sm-end d-none d-sm-block'>
                    Designed &amp; Developed By Pay Hero Kenya
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Index
