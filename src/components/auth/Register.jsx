/* eslint-disable no-unused-vars */
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../features/auth/authActions'
import ThreeDots from '../loading_state/ThreeDots'
import { number } from 'prop-types'

const Register = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) navigate('/home')
    // redirect user to login page if registration was successful
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(registerUser(data))
    navigate('/login')
  }

  return (
    <>
      <div className='form-wrapper'>
        <h2 className='login-title'>Register now</h2>
        <div>{error && { error }}</div>
        <form
          className='login-form'
          onSubmit={handleSubmit(submitForm)}
          encType='multipart/form-data'
        >
          <div>
            <label htmlFor='avatar'>Avatar </label>
            <input
              className='form-control'
              type='file'
              accept='image/*'
              {...register('avatar', {
                required: 'Please add your profile picture',
              })}
            />
            {errors.avatar && <p>{errors.avatar.message}</p>}
          </div>
          <div>
            <label htmlFor='role'>Register As </label>
            <select
              className='form-select'
              {...register('role', {
                required: 'Please select a role',
              })}
            >
              <option value='' disabled>
                Select a role
              </option>
              <option value='writer'>WRITER</option>
              <option value='employer'>EMPLOYER</option>
            </select>
            {errors.role && (
              <p className='bg-danger text-white  fw-bold text-center p-1 '>
                {errors.role.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor='firstname'>firstname </label>
            <input
              id='firstname'
              className='form-control'
              type='text'
              placeholder='full firstname ..'
              {...register('firstname', {
                required: 'First name is required',
                minLength: {
                  value: 2,
                  message: 'First name must be at least 2 characters',
                },
              })}
              required
            />
            {errors.firstname && (
              <p className='bg-danger text-white  fw-bold text-center p-1 '>
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor='lastname'>lastname </label>
            <input
              id='lastname'
              className='form-control'
              type='text'
              placeholder='lastname'
              {...register('lastname', {
                required: 'last name is required',
                minLength: {
                  value: 2,
                  message: 'last name must be at least 2 characters',
                },
              })}
            />
            {errors.lastname && (
              <p className='bg-danger text-white  fw-bold text-center p-1 '>
                {errors.lastname.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor='phone'>phone </label>
            <input
              className='form-control'
              type='tel'
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Please enter a valid 10-digit phone number',
                },
              })}
            />
            {errors.phone && (
              <p className='bg-danger text-white  fw-bold text-center p-1 '>
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor='email'>Email </label>
            <input
              className='form-control'
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className='bg-danger text-white  fw-bold text-center p-1 '>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor='password'>Password </label>
            <input
              className='form-control'
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 4,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />
            {errors.password && (
              <p className='bg-danger text-white  fw-bold text-center p-1 '>
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor='password'>Confirm Password </label>
            <input
              className='form-control'
              type='password'
              placeholder='password'
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
