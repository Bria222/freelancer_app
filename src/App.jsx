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
import EmployerLogin from './components/auth/Employer/EmployerLogin'
import EmployerReg from './components/auth/Employer/EmployerReg'
import WriterLogin from './components/auth/Writer/WriterLogin'
import WriterReg from './components/auth/Writer/WriterReg'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/writer-login' element={<WriterLogin />} />
        <Route path='/employer-login' element={<EmployerLogin />} />
        <Route path='/employer-register' element={<EmployerReg />} />
        <Route path='/writer-register' element={<WriterReg />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />

        <Route path='/reset' element={<ResetPass />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<BarLayout />}>
            <Route path='/home' element={<Index />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Profile-update' element={<UpdateProfile />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
