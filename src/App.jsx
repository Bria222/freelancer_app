/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import './assets/css/app.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/icons.min.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Index from './routes/dashboard/Index'
import ProtectedRoute from './routing/ProtectedRoute'
import BarLayout from './components/layout/Layout'

import Profile from './components/pages/profile/Profile'
import UpdateProfile from './components/pages/profile/UpdateProfile'
import ResetPass from './components/auth/ResetPass'
import Home from './components/pages/Home/Home'
import Order from './components/Orders/Order'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />

        <Route path='/reset' element={<ResetPass />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<BarLayout />}>
            <Route path='/home' element={<Index />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Profile-update' element={<UpdateProfile />} />
            <Route path='/orders' element={<Order />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
