import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Home from '../components/Home/Home'

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const storageUser = localStorage.getItem('userToken')

  // show unauthorized screen if no user is found in redux store
  const userAccess = userInfo ? userInfo : storageUser
  if (!userAccess) {
    return <Home />
  }

  return <Outlet />
}

export default ProtectedRoute
