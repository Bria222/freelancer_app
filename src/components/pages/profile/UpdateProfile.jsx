import { useEffect } from 'react'

import ThreeDots from '../../loading_state/ThreeDots'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUser } from '../../../features/slices/user/userSlice'
import { useState } from 'react'
import Swal from 'sweetalert2'
const UpdateProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data, isLoading, error } = useSelector((state) => state.user)
  const [firstName, setFirstName] = useState(data.first_name)
  const [lastName, setLastName] = useState(data.last_name)
  const [email, setEmail] = useState(data.email)
  const [phone, setphone] = useState(data.phone_number.number)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  if (isLoading) {
    return (
      <>
        <ThreeDots />
      </>
    )
  }

  if (error) {
    navigate('/lockScreen')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'updated!',
      text: `profile updated sucess!`,
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    })
    navigate('/profile')
  }
  return (
    <>
      <div className='main-content'>
        <div className='page-content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='page-title-box d-sm-flex align-items-center justify-content-between'>
                  <h4 className='mb-sm-0 font-size-18'>Edit Account Details</h4>
                  <div className='page-title-right'>
                    <ol className='breadcrumb m-0 d-flex gap-1'>
                      <li className='breadcrumb-item'>Dashboard</li>/
                      <li className='list-group-item '>Edit Details</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title mb-4'>Edit Account Details</h4>
                    <form onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-firstname-input'
                              className='form-label'
                            >
                              Business Name
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              id='formrow-firstname-input'
                              placeholder='Enter Your Business Name'
                              name='business_name'
                              value={data.accounts[0].description}
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-firstname-input'
                              className='form-label'
                            >
                              callback url
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              id='formrow-firstname-input'
                              placeholder='Enter Your Registration Number'
                              name='registration_number'
                              value='#'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-firstname-input'
                              className='form-label'
                            >
                              first Name
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              id='formrow-firstname-input'
                              placeholder='Enter Your Business Name'
                              name='business_name'
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-firstname-input'
                              className='form-label'
                            >
                              Last Name
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              id='formrow-firstname-input'
                              placeholder='Enter Your Registration Number'
                              name='registration_number'
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-email-input'
                              className='form-label'
                            >
                              Contact Email
                            </label>
                            <input
                              type='email'
                              className='form-control'
                              id='formrow-email-input'
                              placeholder='Enter Your Email'
                              name='contact_email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-password-input'
                              className='form-label'
                            >
                              Contact Phone
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              id='formrow-password-input'
                              placeholder='Enter Your Phone'
                              name='contact_phone'
                              value={phone}
                              onChange={(e) => setphone(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className='row'>
                        <div className='col-lg-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-inputCity'
                              className='form-label'
                            >
                              Callback URL
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              id='formrow-inputCity'
                              placeholder='Enter Your Callback URL'
                              name='callback_url'
                              value='#'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-inputCity'
                              className='form-label'
                            >
                              Service Wallet Balance Notification Amount
                            </label>
                            <br />
                            <small>
                              Specify the amount which will trigger a
                              notification if your service wallet falls below
                              the given amount.
                            </small>
                            <input
                              type='number'
                              className='form-control'
                              id='formrow-inputCity'
                              placeholder='Enter Threshold Amount'
                              name='balance_notification'
                              value='20'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='mb-3'>
                            <label htmlFor='formmessage'>
                              Customer Thankyou Message
                            </label>
                            <br />
                            <small>
                              You can specify a message here,which will be sent
                              to a customer after succesfull payment is made to
                              you. if you wish to include amount in the message
                              just put amount where you wish their amount to be
                              and the system will automatically place their
                              amount in the message.This service will cost you
                              regular SMS service charges from your service
                              wallet.
                            </small>
                            <textarea
                              id='formmessage'
                              className='form-control'
                              rows='3'
                              placeholder='Enter Customer Payment Appreciation Message'
                              name='thankyou'
                            ></textarea>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-inputState'
                              className='form-label'
                            >
                              Receive SMS Notifications
                            </label>
                            <br />
                            <small>
                              You will be geting transaction notifications via
                              SMS. This will cost you regular service charge on
                              your service wallet.
                            </small>
                            <select
                              id='formrow-inputState'
                              className='form-select'
                              name='sms_notifications'
                            >
                              <option selected=''>Choose...</option>
                              <option value='1'>Yes</option>
                              <option value='0' selected=''>
                                No
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='mb-3' data-select2-id='45'>
                            <label className='form-label'>
                              Additional Products
                            </label>
                            <br />
                            <small>
                              Only Select Both If You Are Going To Integrate To
                              WooCommerce. To select press and hold CTRL+Click
                            </small>
                            <select
                              id='mySelect'
                              className='form-select'
                              multiple=''
                              name='products[]'
                            >
                              <option value='EXTERNAL STK'>EXTERNAL STK</option>
                              <option value='WOOCOMMERCE'>WOOCOMMERCE</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='mb-3'>
                            <label
                              htmlFor='formrow-inputState'
                              className='form-label'
                            >
                              Use Pay Hero Whatsapp
                            </label>
                            <br />
                            <small>
                              This will default to sending notifications to your
                              customers using our Whatsapp Number if you have
                              not linked yours
                            </small>
                            <select
                              id='formrow-inputState'
                              className='form-select'
                              name='use_ph_wa'
                            >
                              <option selected=''>Choose...</option>
                              <option value='1'>Yes</option>
                              <option value='0' selected=''>
                                No
                              </option>
                            </select>
                          </div>
                        </div>
                      </div> */}
                      <div>
                        <button
                          type='submit'
                          className='btn btn-success w-md'
                          name='update_account'
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
