/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import MonthlyPaymentsChart from '../../components/analytics/MonthlyPaymentsChart'
import TransactionChargesSummary from '../../components/analytics/TransactionChargesSummary'

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
                    Introducing SaSa Pay!!. Your customers can now pay You via
                    MPESA, Airtel Money, T-Kash and Pesa Link easily. Once paid
                    you can access your funds in a wallet which you can withdraw
                    to MPESA,Airtel Money, T-Kash Or Bank Account quickly and
                    sefely. With this new way you do not need to link a payment
                    channel to your account. Register Now to get started!{' '}
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
                <div className='col-lg-12'>
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

                <div className='col-lg-12'>
                  <h4 className='card-title'>Quick Actions</h4>
                  <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <div
                      className='d-flex flex-nowrap gap-2'
                      style={{ display: 'flex' }}
                    >
                      <div
                        className='btn-group btn-group-example mb-3'
                        role='group'
                      >
                        <button
                          type='button'
                          className='btn btn-primary w-sm'
                          style={{ minWidth: '200px' }}
                          data-bs-toggle='modal'
                          data-bs-target='#staticBackdrop'
                        >
                          <i className='fa fa-plus-circle d-block font-size-20'></i>{' '}
                          Top Up Service Wallet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>

                        <Link
                          to='/send-invoice'
                          type='button'
                          className='btn btn-success w-sm'
                          style={{ minWidth: '200px' }}
                        >
                          <i className='fa fa-receipt d-block font-size-20'></i>
                          &nbsp;&nbsp;&nbsp;Send Invoice
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link
                          to={`/lipwa/`}
                          type='button'
                          className='btn btn-warning w-sm'
                          style={{ minWidth: '200px' }}
                          rel='noreferrer'
                        >
                          <i className='fa-solid fa-link d-block font-size-20'></i>
                          &nbsp;&nbsp;&nbsp;My Lipwa
                          Link&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link
                          to='/add-payment-chanell'
                          type='button'
                          className='btn btn-danger w-sm'
                          style={{ minWidth: '200px' }}
                        >
                          <i className='fa-solid fa-wallet d-block font-size-20'></i>
                          &nbsp;&nbsp;&nbsp;Add Payment
                          Channel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link
                          to='/home'
                          type='button'
                          className='btn btn-info w-sm'
                          style={{ minWidth: '200px' }}
                        >
                          <i className='fa-solid fa-qrcode d-block font-size-20'></i>
                          &nbsp;&nbsp;&nbsp;Generate Lipwa Link/QR
                          Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link
                          to='/home'
                          type='button'
                          className='btn btn-dark w-sm'
                          style={{ minWidth: '200px' }}
                        >
                          <i className='fa-solid fa-money-bill d-block font-size-20'></i>
                          &nbsp;&nbsp;&nbsp;Create Payment Goal
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title mb-3'>Welcome To SPS</h4>

                    <div className='row'>
                      <div className='col-sm-9'>
                        <p className='text-muted'>
                          Share your Lipwa link with customers for easy
                          payments. Receive SMS and email notifications when
                          payments are made. Link at least one payment
                          settlement method (bank, paybill, or till) to start
                          receiving payments.
                          <div>
                            <Link
                              to={`/lipwa/${1}`}
                              className='btn btn-success btn-sm'
                              rel='noreferrer'
                            >
                              {' '}
                              <i className='fa-solid fa-link align-middle'></i>{' '}
                              Visit My Lipwa Link
                            </Link>
                          </div>
                          <br />
                          <h5>
                            Get Paid On WhatsApp{' '}
                            <img
                              src='../images/brands/whatsapp.png'
                              className='whathsapp-icon '
                              alt='icon'
                            />
                          </h5>
                        </p>

                        <p className='text-muted'>
                          Your clients can now pay you directly from WhatsApp
                          Share your WhatsApp Payment link Below: <br />
                          <b>https://is.gd/hlcN1W</b>
                        </p>
                      </div>
                      <div className='col-sm-3 '>
                        <div className='mt-4 mt-sm-0 d-flex justify-content-end'>
                          <img
                            src='../images/main/jobs.png'
                            alt='sps right image'
                            height='130'
                          />
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

                <MonthlyPaymentsChart />
                <TransactionChargesSummary />

                <div className='col-lg-12'>
                  <div className='row'>{/* <LatestTransactions /> */}</div>
                </div>
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
