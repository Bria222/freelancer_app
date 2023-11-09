import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../features/slices/orders/orderSlice'

const Order = () => {
  const dispatch = useDispatch()
  const { orders, status, error } = useSelector((state) => state.orders)

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('userToken')

    if (token) {
      dispatch(fetchOrders(token))
    }
  }, [dispatch])

  if (status === 'loading') {
    return (
      <div
        className='progress'
        role='progressbar'
        aria-label='Animated striped example'
        aria-valuenow='75'
        aria-valuemin='0'
        aria-valuemax='100'
      >
        <div
          className='progress-bar progress-bar-striped progress-bar-animated bg-success'
          style={{ width: '60%' }}
        ></div>
      </div>
    )
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h1 className='card-title display-1'>All Orders</h1>
                <div className='table-responsive'>
                  <table
                    id='datatable-buttons'
                    className='table table-bordered dt-responsive nowrap w-100'
                  >
                    <thead className='bg-dark '>
                      <tr className='text-center'>
                        <th className='fw-bold text-white'>Order ID</th>
                        <th className='fw-bold text-white'>Account</th>
                        <th className='fw-bold text-white'>Subject</th>
                        <th className='fw-bold text-white'>Topic</th>
                        <th className='fw-bold text-white'>Writer</th>

                        <th className='fw-bold text-white'>Amount (KSH)</th>
                        <th className='fw-bold text-white'>Writer deadline</th>
                        <th className='fw-bold text-white'>paid</th>
                        <th className='fw-bold text-white'>Action</th>
                      </tr>
                    </thead>
                    <tbody key={1}>
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td>{order.account_order_number}</td>
                          <td>{order.account_name}</td>

                          <td>{order.subject}</td>
                          <td>{order.topic}</td>
                          <td>{order.writer}</td>
                          <td>{order.amount}</td>
                          <td>{order.writer_deadline}</td>
                          <td>{'pending'}</td>
                          <td>
                            <button className='btn btn-success'>Actions</button>
                          </td>
                        </tr>
                      ))}
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
