/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useEffect, useState, React } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { registerUser } from '../../features/auth/authActions'

import ThreeDots from '../loading_state/ThreeDots'
const Register = () => {
  const [customError, setCustomError] = useState(null)

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) navigate('/home')

    if (success) navigate('/login')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    if (data.password !== data.password_confirmation) {
      setCustomError('Password mismatch')
      Swal.fire('Alert text')
      Swal.fire(
        'Check your password!',
        ' you password did not match check and try again ',
        'warning'
      )
      return
    }
    if (success) {
      Swal.fire('Alert text')
      Swal.fire('welcome!', 'Successfuly registered', 'success')
    }
    // if (!success) {

    // }

    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()

    dispatch(registerUser(data))
    // show alert success
  }
  return (
    <>
      <div className='account-pages my-5 pt-sm-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8 col-lg-6 col-xl-5'>
              <div className='card overflow-hidden'>
                <div className='bg-success bg-soft'>
                  <div className='row'>
                    <div className='col-7'>
                      <div className='text-success p-4'>
                        <h5 className='text-dark'>Welcome Back !</h5>
                        <p className='text-dark'>
                          Sign in to continue to Pay Hero!
                        </p>
                      </div>
                    </div>
                    <div className='col-5 align-self-end'>
                      <img
                        src='../images/profile-img.png'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
                <div className='card-body pt-0'>
                  <div className='auth-logo'>
                    <a href='index.html' className='auth-logo-light'>
                      <div className='avatar-md profile-user-wid mb-4'>
                        <span className='avatar-title rounded-circle bg-light'>
                          <img
                            src='../images/logo-light.svg'
                            alt='payhero'
                            className='rounded-circle'
                            height='34'
                          />
                        </span>
                      </div>
                    </a>

                    <a href='index.html' className='auth-logo-dark'>
                      <div className='avatar-md profile-user-wid mb-4'>
                        <span className='avatar-title rounded-circle bg-light'>
                          <img
                            src='../files-PayHero3.png'
                            alt=''
                            className='rounded-circle'
                            height='34'
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className='p-2'>
                    <form
                      className='form-horizontal'
                      onSubmit={handleSubmit(submitForm)}
                    >
                      <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>
                          Email
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          placeholder='Enter Email'
                          {...register('email')}
                          required
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>
                          Username
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='username'
                          placeholder='Enter username'
                          {...register('username')}
                          required
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>
                          first_name
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='first_name'
                          placeholder='Enter first_name'
                          {...register('first_name')}
                          required
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>
                          last_name
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='last_name'
                          placeholder='Enter last_name'
                          {...register('last_name')}
                          required
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='Phone_Number' className='form-label'>
                          Phone Number
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='Phone_Number'
                          placeholder='Enter Phone_Number'
                          {...register('number')}
                          required
                        />
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='Country code' className='form-label'>
                          Country code
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='Country_code'
                          placeholder='Country code'
                          {...register('country_code')}
                          required
                        />
                      </div>

                      <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <div className='input-group auth-pass-inputgroup'>
                          <input
                            type='password'
                            className='form-control'
                            placeholder='Enter password'
                            aria-label='Password'
                            {...register('password')}
                            required
                          />
                        </div>
                      </div>
                      <div className='mb-3'>
                        <label className='form-label'>
                          password confirmation
                        </label>
                        <div className='input-group auth-pass-inputgroup'>
                          <input
                            type='password'
                            className='form-control'
                            placeholder='Enter password confirmation'
                            aria-label='Password'
                            {...register('password_confirmation')}
                            required
                          />
                        </div>
                      </div>

                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='remember-check'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='remember-check'
                        >
                          Remember me
                        </label>
                      </div>

                      <div className='mt-3 d-grid'>
                        <button
                          className='btn btn-success waves-effect waves-light'
                          type='submit'
                          disabled={loading}
                        >
                          {loading ? <ThreeDots /> : 'Sign Me up'}
                        </button>
                      </div>

                      <div className='mt-4 text-center'>
                        <p>
                          Already have an account ?
                          <Link to='/' className='fw-medium text-success'>
                            {' '}
                            Login
                          </Link>
                        </p>
                        <Link to='/register' className='text-muted'>
                          By registering you agree to the SPS Terms of Use
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='mt-5 text-center'>
                <div>
                  <p>
                    © <script>document.write(new Date().getFullYear())</script>{' '}
                    2023 SPS. Crafted with
                    <i className='fa-solid fa-heart text-danger'></i> by Pay
                    Hero Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
