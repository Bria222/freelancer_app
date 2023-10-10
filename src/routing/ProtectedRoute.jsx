import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../components/auth/Login'

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const storageUser = localStorage.getItem('userToken')

  // show unauthorized screen if no user is found in redux store
  const userAccess = userInfo ? userInfo : storageUser
  if (!userAccess) {
    return <Login />
  }

  return <Outlet />
}

export default ProtectedRoute
