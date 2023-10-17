import { Link } from 'react-router-dom'
import HomeTop from './HomeTop'
import HomeFooter from './HomeFooter'

const Home = () => {
  return (
    <>
      <HomeTop />
      <br />
      <br />

      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 '>
            <img
              className='img-center img-fluid '
              data-wow-duration='3s'
              src='../../images/hero1.jpg'
              alt=''
              style={{
                visibility: 'visible',
                width: '100%',
                borderRadius: '36%',
              }}
            />
          </div>
          <div className='col-lg-6 '>
            <h1
              className='mb-4 wow fadeInUp'
              data-wow-duration='1.5s'
              style={{
                visibility: 'visible',
                animationDuration: '1.5s',
                animationName: 'fadeInUp',
              }}
            >
              Welcome To Freelancers Arena
            </h1>
            <p
              className='lead mb-4 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.3s'
              style={{
                visibility: 'visible',
                animationDuration: '2s',
                animationDelay: '0.3s',
                animationName: 'fadeInUp',
              }}
            >
              Freelancers Arena has evolved to a plartform where employers and
              writers co-exist. Posting orders to the public and digital payment
              are the trending features. It still remains to be a tool for you
              to manage your writers effeciently. Comes with an inbuilt
              plagiarism checker, ability to assign and reasign orders, track
              payments and balances, among other incredible features. All
              bundled up for you to ensure you run your operations smoothly.{' '}
            </p>

            <Link
              className='btn btn-dark wow fadeInUp'
              data-wow-duration='3s'
              data-wow-delay='0.5s'
              to='/'
              data-text='Learn More'
              style={{
                visibility: 'visible',
                animationDuration: '3s',
                animationDelay: '0.5s',
                animationName: 'fadeInUp',
              }}
            >
              {' '}
              <span>L</span>
              <span>e</span>
              <span>a</span>
              <span>r</span>
              <span>n</span>
              <span> </span>
              <span>M</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 '>
            <h2
              className='mb-4 wow fadeInUp font-monospace'
              data-wow-duration='1.5s'
              style={{
                visibility: 'visible',
                animationDuration: '1.5s',
                animationName: 'fadeInUp',
              }}
            >
              More benefits, much convenience
            </h2>
            <h1 className='text-dark fw-bolder '>Freedom of Work</h1>
            <ul className='list'>
              <li className='list-group-item'>
                {' '}
                <i className='fa-solid fa-circle-chevron-right fa-2x text-success'></i>{' '}
                <span className='fw-bolder fs-4'>Free sign-up</span>
              </li>
              <li className='list-group-item'>
                {' '}
                <i className='fa-solid fa-circle-chevron-right fa-2x text-success'></i>{' '}
                <span className='fw-bolder fs-4'>Academic writing</span>
              </li>
              <li className='list-group-item'>
                {' '}
                <i className='fa-solid fa-circle-chevron-right fa-2x text-success'></i>{' '}
                <span className='fw-bolder fs-4'>Timely payment</span>
              </li>
              <li className='list-group-item'>
                {' '}
                <i className='fa-solid fa-circle-chevron-right fa-2x text-success'></i>{' '}
                <span className='fw-bolder fs-4'>Amazing payout</span>
              </li>
              <li className='list-group-item'>
                {' '}
                <i className='fa-solid fa-circle-chevron-right fa-2x text-success'></i>{' '}
                <span className='fw-bolder fs-4'>24x7 Support</span>
              </li>
            </ul>
          </div>
          <div className='col-lg-6 '>
            <img
              className='img-center wow jackInTheBox'
              data-wow-duration='3s'
              src='../../images/vector1.png'
              alt=''
              style={{
                visibility: 'visible',
                width: '90%',
                animationDuration: '3s',
                animationName: 'jackInTheBox',
              }}
            />
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  )
}

export default Home
