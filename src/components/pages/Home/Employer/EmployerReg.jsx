import { useEffect, useState } from 'react'
// import './userAuth.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
    // redirect user to login page if registration was successful
    if (success) navigate('/login')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      setCustomError('Password mismatch')
      return
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()

    dispatch(registerUser(data))
  }

  return (
    <>
      <div className='form-wrapper'>
        <h2 className='login-title'>Register now</h2>
        <div>
          {error && { error }}
          {customError && { customError }}
        </div>
        <form className='login-form' onSubmit={handleSubmit(submitForm)}>
          <div>
            <label htmlFor='name'>Name </label>
            <input
              id='name'
              type='text'
              placeholder='full name ..'
              name='name'
              {...register('name')}
              required
            />
          </div>
          <div>
            <label htmlFor='phone_number'>Phone number </label>
            <input
              id='name'
              type='number'
              placeholder='254710889090'
              name='phone_number'
              {...register('phone_number')}
              required
            />
          </div>

          <div>
            <label htmlFor='email'>Email </label>
            <input
              id='email'
              type='email'
              placeholder='me@example.com'
              name='email'
              {...register('email')}
              required
            />
          </div>

          <div>
            <label htmlFor='password'>Password </label>
            <input
              id='password'
              type='password'
              placeholder='password'
              name='password'
              {...register('password')}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Confirm Password </label>
            <input
              id='password'
              type='password'
              placeholder='password'
              name='password'
              {...register('confirmPassword')}
              required
            />
          </div>

          <button type='submit' className='btn btn--form' disabled={loading}>
            {loading ? <ThreeDots /> : 'Register'}
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
