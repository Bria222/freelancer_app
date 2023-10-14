import { useNavigate } from 'react-router-dom'

const LoginModal = () => {
  const navigate = useNavigate()
  const handlewriter = () => {
    navigate('/login')
  }
  const handleEmployer = () => {
    navigate('/login')
  }
  return (
    <div
      className='modal'
      id='loginModal'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered '>
        <div className='modal-content '>
          <div className='modal-header '>
            <h1
              className='modal-title fs-5 m-auto fw-bolder'
              id='exampleModalLabel'
            >
              Login As
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
              type='button'
              data-bs-dismiss='modal'
              className='btn btn-warning text-white fw-bolder me-3'
              onClick={handlewriter}
            >
              Writer
            </button>
            <button
              type='button'
              data-bs-dismiss='modal'
              className='btn btn-secondary text-white fw-bolder'
              onClick={handleEmployer}
            >
              Employer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
