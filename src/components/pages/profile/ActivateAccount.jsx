/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { activateAccount } from '../../../features/auth/activationSlice'
const ActivateAccount = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.activation.isLoading)
  const error = useSelector((state) => state.activation.error)
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    dispatch(activateAccount(data))
      .unwrap()
      .then((response) => {
        Swal.fire({
          title: 'Success',
          text: 'Activated successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        })

        console.log('Success:', response)
      })
      .catch((error) => {
        console.error('Error:', error)

        Swal.fire({
          title: 'Error!',
          text: `${error}`,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        })
      })
  }

  return (
    <>
      <div
        className='modal fade'
        id='activate'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        role='dialog'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel'>
                Activate your account
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                  <label
                    htmlFor='formrow-username-input'
                    className='form-label'
                  >
                    username
                  </label>

                  <input
                    type='text'
                    className='form-control'
                    {...register('username')}
                    placeholder='Enter username'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='formrow-firstname-input'
                    className='form-label'
                  >
                    Activation code
                  </label>

                  <input
                    type='number'
                    min='10'
                    max='300000'
                    className='form-control p-2'
                    {...register('activation_code')}
                    placeholder='Enter activation_code'
                    required
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    className='btn btn-success w-md'
                    name='activate'
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending Activation...' : 'Activate'}
                  </button>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-light'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActivateAccount
