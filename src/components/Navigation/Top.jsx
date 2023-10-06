import { Link, useNavigate } from 'react-router-dom'
import RegisterModal from '../../auth/modals/RegisterModal'
import LoginModal from '../../auth/modals/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { logout } from '../../features/auth/authSlice'

const Top = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const handleLogout = () => {
    Swal.fire('logged out!', 'logout sucess!', 'success')
    dispatch(logout())
    navigate('/')
  }
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <i className='fa-solid fa-computer text-info'></i>{' '}
            <span style={{ fontWeight: '900', color: 'green' }}>F</span>
            reelancers Arena
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active fw-bolder'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link active fw-bolder'>
                  Features
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link  fw-bolder'>
                  Usage
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link  fw-bolder'>
                  Blacklisted clients
                </Link>
              </li>
            </ul>
            {userInfo ? (
              <>
                <button
                  className='btn btn-outline-success me-1'
                  onClick={handleLogout}
                >
                  {userInfo ? userInfo.user.name : null}
                </button>
                <button className='btn btn-danger' onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <form className='d-flex' role='search'>
                  <button
                    type='button'
                    className='btn btn-primary me-1'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    register
                  </button>
                  <button
                    className='btn btn-success'
                    type='button'
                    data-bs-toggle='modal'
                    data-bs-target='#loginModal'
                  >
                    Login
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </nav>

      <RegisterModal />
      <LoginModal />
    </>
  )
}

export default Top
