const EmployerLogin = () => {
  return (
    <>
      <div className='global-container'>
        <div className='card login-form'>
          <div className='card-body'>
            <h3 className='card-title text-center fw-light '>
              {' '}
              Employer Log in{' '}
            </h3>
            <div className=''>
              <center>
                <i className='fa-solid fa-user-lock fa-4x text-info '></i>
              </center>
            </div>
            <div className='card-text'>
              {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
              <form>
                {/* <!-- to error: add class "has-danger" --> */}
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    className='form-control form-control-sm'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <a href='#' style={{ float: 'right', fontSize: '12px' }}>
                    Forgot password?
                  </a>
                  <input
                    type='password'
                    className='form-control form-control-sm'
                    id='exampleInputPassword1'
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-success btn-block lgn-btn'
                >
                  Sign in
                </button>

                <div className='sign-up'>
                  Dont have an account? <a href='#'>Create One</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployerLogin
