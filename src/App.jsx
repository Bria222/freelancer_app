/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home/Home'

import Profile from './components/Profile/Profile'
import BarLayout from './components/layout/Layout'
import EmployerReg from './auth/Employer/EmployerReg'
import WriterReg from './auth/Writer/WriterReg'
import EmployerLogin from './auth/Employer/EmployerLogin'
import WriterLogin from './auth/Writer/WriterLogin'
import ProtectedRoute from './routing/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/writer-login' element={<WriterLogin />} />
        <Route path='/employer-login' element={<EmployerLogin />} />
        <Route path='/employer-register' element={<EmployerReg />} />
        <Route path='/writer-register' element={<WriterReg />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<BarLayout />}>
            <Route path='/Profile' element={<Profile />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
