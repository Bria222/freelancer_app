/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchUser } from '../../../features/slices/user/userSlice'
import ThreeDots from '../../loading_state/ThreeDots'
import Footer from '../../Footer/Footer'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data, isLoading, error } = useSelector((state) => state.user)
  const user_accounts = useSelector((state) => state.accountInfo)
  const account_id =
    user_accounts && user_accounts.data ? user_accounts.data.id : null

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  // will add loading state here

  if (!data) {
    return (
      <>
        <ThreeDots />
      </>
    )
  }

  if (error) {
    navigate('/lockScreen')
  }

  return (
    <>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                  <h4 className='mb-sm-0 font-size-18'>Account Details</h4>
                  <div className='page-title-right'>
                    <ol className='breadcrumb m-0 d-flex gap-1'>
                      <li className='breadcrumb-item'>Dashboard</li>/
                      <li className='list-group-item '>Profile</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title mb-4'>Account Information</h4>
                    <Link
                      type='button'
                      className='btn btn-success waves-effect btn-label waves-light me-2'
                      to='/profile-update'
                    >
                      <i className='fa fa-pencil label-icon fa-lg'></i> Update
                    </Link>
                    <Link
                      type='button'
                      className='btn btn-success waves-effect btn-label waves-light'
                      to='/organization'
                    >
                      Oranization <i className='fa-solid fa-plus fa-lg'></i>
                    </Link>
                    <p className='text-muted mb-4'>
                      Hi {data && data.first_name} , Find below your account
                      details. You can edit/update the details from the account
                      menu.
                    </p>
                    <div className='table-responsive'>
                      <table className='table table-nowrap mb-0'>
                        <tbody>
                          <tr>
                            <th scope='row'>Business Name :</th>
                            <td>
                              {user_accounts.data &&
                                user_accounts.data.description}
                            </td>
                          </tr>
                          <tr>
                            <th scope='row'>Registration Number :</th>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <th scope='row'>Contact E-mail :</th>
                            <td>{data && data.email}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Contact Phone :</th>
                            <td>
                              {data && (
                                <span>
                                  {data.phone_number.country_code}{' '}
                                  {data.phone_number.number}
                                </span>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th scope='row' className='text-danger'>
                              Username :
                            </th>
                            <td>{data && data.username}</td>
                          </tr>
                          <tr>
                            <th scope='row' className='text-danger'>
                              API Key :
                            </th>
                            <td>#</td>
                          </tr>
                          <tr>
                            <th scope='row'>Account Number :</th>
                            <td>#</td>
                          </tr>
                          <tr>
                            <th scope='row'>Callback URL :</th>
                            <td>#</td>
                          </tr>
                          <tr>
                            <th scope='row'>Registration Date :</th>
                            <td>{data && data.updated_at}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Customer Thankyou Message :</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope='row'>Account Status :</th>
                            <td>{data && data.status}</td>
                          </tr>
                          <tr>
                            <th scope='row'>Account Is Verified :</th>
                            <td>
                              {data && data.status === 'verified'
                                ? 'Yes'
                                : 'No'}
                            </td>
                          </tr>
                          <tr>
                            <th scope='row'>
                              Service Wallet Balance Notification :
                            </th>
                            <td>
                              {user_accounts && user_accounts.data ? (
                                <>
                                  {user_accounts.data?.service_wallet_balance?.toFixed(
                                    1
                                  ) || 'Zero balance'}
                                </>
                              ) : (
                                <span>No accounts</span>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th scope='row'>Account Type :</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope='row'>Account Products :</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope='row'>Enrolled :</th>
                            <td>SPS</td>
                          </tr>
                        </tbody>
                      </table>
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
