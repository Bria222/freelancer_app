const Order = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title'>Available</h4>
                <div className='table-responsive'>
                  <table
                    id='datatable-buttons'
                    className='table table-bordered dt-responsive nowrap w-100'
                  >
                    <thead>
                      <tr>
                        <th>Employer</th>
                        <th>Order ID</th>
                        <th>Subject</th>
                        <th>Pages</th>

                        <th>Budget (KSH)</th>
                        <th>Duration</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {data?.transactions && data.transactions.length > 0 ? (
                        data.transactions.map((transaction) => ( */}
                      <tr key={1}>
                        <th scope='row'>Brian Nyachae</th>
                        <td>
                          <span
                            className='badge rounded-pill bg-success'
                            key='t-new'
                          >
                            #4556567
                          </span>
                        </td>
                        <td> Physics</td>
                        <td>46</td>

                        <td>6000</td>
                        <td>2:30:34</td>

                        <td>
                          <button className='btn btn-success'>start</button>
                        </td>
                      </tr>
                      {/* ))
                      ) : (
                        <tr>
                          <td colSpan='9'>No Transaction found</td>
                        </tr>
                      )} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
