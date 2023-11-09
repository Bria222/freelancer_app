const TopUp = () => {
  return (
    <>
      {/* <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#topUp'
      >
        Launch demo modal
      </button> */}

      <div
        className='modal fade'
        id='topUp'
        tabIndex='-1'
        aria-labelledby='topUpLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5 m-auto fw-bolder' id='topUpLabel'>
                Top up your wallet
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>
                    Safaricom Phone number
                  </label>
                  <input type='tel' className='form-control' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='amount' className='form-label'>
                    Amount
                  </label>
                  <input type='number' className='form-control' />
                </div>

                <button type='submit' className='btn btn-dark'>
                  Initiate transaction{' '}
                  <i className='fa-regular fa-paper-plane text-success fa-2x'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopUp
