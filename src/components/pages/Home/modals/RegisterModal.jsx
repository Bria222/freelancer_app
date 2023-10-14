import { Link } from 'react-router-dom'

const RegisterModal = () => {
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered '>
        <div className='modal-content '>
          <div className='modal-header '>
            <h1
              className='modal-title fs-5 m-auto fw-bolder'
              id='exampleModalLabel'
            >
              Register As
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body m-auto'>
            <button
              className='btn btn-warning text-white fw-bolder me-3'
              type='button'
              data-bs-dismiss='modal'
            >
              <Link to='/register' className='nav-link'>
                Writer
              </Link>
            </button>
            <button
              className='btn btn-secondary text-white fw-bolder'
              type='button'
              data-bs-dismiss='modal'
            >
              <Link to='/register' className='nav-link'>
                Employer
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
