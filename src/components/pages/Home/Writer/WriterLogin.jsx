/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './css/writer.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { userLogin } from '../../features/auth/authActions'
import ThreeDots from '../../components/loading_state/ThreeDots'
const WriterLogin = () => {
  const [customError, setCustomError] = useState(null)
  const { loading, userInfo } = useSelector((state) => state.auth)
  const error = useSelector((state) => state.auth.error)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/profile')
    }
  }, [navigate, userInfo])
  if (error) {
    Swal.fire({
      title: 'Error!',
      text: `${error}`,
      icon: 'error',
      showConfirmButton: false,
      timer: 2000,
    })
  }
  if (userInfo) {
    Swal.fire('welcome!', 'login sucess!', 'success')
  }

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }
  return (
    <>
      <div className='global-container'>
        <div className='card login-form'>
          <div className='card-body'>
            <h3 className='card-title text-center fw-light '>
              {' '}
              Writer Log in{' '}
            </h3>
            <div className=''>
              <center>
                <i className='fa-solid fa-user-graduate fa-4x text-info '></i>
              </center>
            </div>
            <div className='card-text'>
              {customError && (
                <div
                  className='alert alert-danger alert-dismissible fade show'
                  role='alert'
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit(submitForm)}>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    className='form-control form-control-sm'
                    {...register('email')}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <Link to='/' style={{ float: 'right', fontSize: '12px' }}>
                    Forgot password?
                  </Link>
                  <input
                    type='password'
                    className='form-control form-control-sm'
                    {...register('password')}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-success btn-block lgn-btn'
                  disabled={loading}
                >
                  {loading ? (
                    <div className='spinner-border text-white' role='status'>
                      <span className='visually-hidden'>Loading...</span>
                    </div>
                  ) : (
                    'Sign Me In'
                  )}
                </button>

                <div className='sign-up'>
                  Dont have an account? <Link to='/register'>Create One</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WriterLogin
