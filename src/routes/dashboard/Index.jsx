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

                <hr />
                <div className='col-sm-3'>
                  <div className='card mini-stats-wid'>
                    <div className='card-body'>
                      <div className='d-flex'>
                        <div className='flex-shrink-0 me-3 align-self-center'>
                          <i className='fa-solid fa-x text-danger mb-0 fa-3x'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Cancelled Orders</p>
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
                          <i className='fa-solid fa-rotate-right text-warning mb-0 fa-3x'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Unconfirmed Orders</p>
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
                          <i className='fa-solid fa-rotate text-danger mb-0 fa-3x'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Orders In Revision</p>
                          <h5 className='mb-0'>. </h5>
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
                          <i className='fa fa-star fa-3x text-success mb-0'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Available for Take</p>
                          <h5 className='mb-0'>3 </h5>
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
                          <i className='fa fa-list-ul fa-3x text-success mb-0'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>All Orders</p>
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
                          <i className='fa-solid fa-circle-half-stroke text-dark mb-0 fa-3x'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Orders in Progress</p>
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
                          <i className='fa-solid fa-thumbs-down text-info mb-0 fa-3x'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Rejected Orders</p>
                          <h5 className='mb-0'>. </h5>
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
                          <i className='fa fa-check fa-3x text-success  mb-0'></i>
                        </div>
                        <div className='flex-grow-1'>
                          <p className='text-muted mb-2'>Paid Orders</p>
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
                </div>
                <div className='col-sm-6'>
                  <div className='text-sm-end d-none d-sm-block'>
                    Designed &amp; Developed By Brian Technologies
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
