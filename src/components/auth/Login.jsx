/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/auth/authActions'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/home')
      // window.location.reload()
    }
  }, [navigate, userInfo])

  if (error) {
    Swal.fire(`<Error>${error}</Error>`)
  }
  if (userInfo) {
    Swal.fire({
      title: 'welcome!',
      text: `login sucess!`,
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    })
  }
  const submitForm = (data) => {
    dispatch(userLogin(data))
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
                        <label htmlFor='username' className='form-label'>
                          Email
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          placeholder='Enter username'
                          {...register('email')}
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
                            aria-describedby='password-addon'
                            {...register('password')}
                            required
                          />
                          <button
                            className='btn btn-light '
                            type='button'
                            id='password-addon'
                          >
                            <i className='fa-regular fa-eye'></i>
                          </button>
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
                        >
                          {loading ? (
                            <div
                              className='spinner-border text-white'
                              role='status'
                            >
                              <span className='visually-hidden'>
                                Loading...
                              </span>
                            </div>
                          ) : (
                            'Sign Me In'
                          )}
                        </button>
                      </div>

                      <div className='mt-4 text-center'>
                        <p>
                          Don't have an account ?{' '}
                          <Link
                            to='/register'
                            className='fw-medium text-success'
                          >
                            Signup now
                          </Link>
                        </p>
                        <Link to='/reset' className='text-muted'>
                          <i className='fa-solid fa-lock'></i> Forgot your
                          password?
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

export default Login
