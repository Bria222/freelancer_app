import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <>
      <footer className='bg-secondary text-center text-white mt-lg-4 m-1 '>
        <div className='container p-4'>
          <section className='mb-4'>
            <Link to='/' className='btn btn-light btn-floating m-1 '>
              <i className='fab fa-facebook-f text-primary'></i>
            </Link>

            <Link to='/' className='btn btn-light btn-floating m-1 '>
              <i className='fab fa-twitter text-primary'></i>
            </Link>

            <Link to='/' className='btn btn-light btn-floating m-1 '>
              <i className='fab fa-google text-warning'></i>
            </Link>

            <Link to='/' className='btn btn-light btn-floating m-1 '>
              <i className='fab fa-instagram text-danger'></i>
            </Link>
            <Link to='/' className='btn btn-light btn-floating m-1 '>
              <i className='fab fa-linkedin-in text-primary'></i>
            </Link>
            <Link to='/' className='btn btn-light btn-floating m-1 '>
              <i className='fab fa-github text-dark'></i>
            </Link>
          </section>

          <section className=''>
            <form action=''>
              <div className='row d-flex justify-content-center'>
                <div className='col-auto'>
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className='col-md-5 col-12'>
                  <div className='form-outline form-white mb-4'>
                    <input
                      type='email'
                      id='form5Example21'
                      className='form-control'
                      placeholder='example@gmail.com.....'
                    />
                  </div>
                </div>

                <div className='col-auto'>
                  <button type='submit' className='btn btn-outline-light mb-4'>
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className='mb-4'>
            <p>
              Freelancers Arena is an online application that connects writers
              and potential employers under one plarform, by offering Employers
              the ability to manage all your writers with ease. and writers
              ability to find related orders
            </p>
          </section>

          <section className=''>
            <div className='row'>
              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5 className='text-uppercase fw-bolder'>Contact</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      +2547000000000
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      +2547111111111
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      support@freelancersArena.com
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5 className='text-uppercase fw-bolder'>Quick Actions</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      How to get started with Freelancer Arena
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      Terms and policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5 className='text-uppercase fw-bolder'>About</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      News Letter
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5 className='text-uppercase fw-bolder'>More</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      Academic Resources
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      Android App
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='text-white nav-link'>
                      Articles
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
          © 2020 Copyright ||
          <Link to='/' className='text-white nav-link'>
            Freelancer Arena
          </Link>
        </div>
      </footer>
    </>
  )
}

export default HomeFooter
